'use client';

import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface DecodeUser {
  exp: number;
}

export function TokenRefreshProvider() {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRefreshCycle = () => {
    const accessToken = localStorage.getItem('dj-access');

    if (!accessToken) {
      console.warn('No token available');

      return;
    }

    const decoded: DecodeUser = jwtDecode(accessToken);
    const timeToExpire = decoded.exp * 1000 - Date.now();
    const delay = Math.max(timeToExpire - 10_000, 5_000);

    timerRef.current = setInterval(async () => {
      try {
        const res = await fetch('/api/refresh', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        const { data } = await res.json();

        if (data?.accessToken) {
          localStorage.setItem('dj-access', data.accessToken);
        } else {
          throw new Error('Failed to refresh token');
        }
      } catch (error) {
        console.warn('Token refresh failed:', error);
        clearInterval(timerRef.current!);
        router.push('/login');
      }
    }, delay);
  };

  useEffect(() => {
    startRefreshCycle();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
    // eslint-disable-next-line
  }, []);

  return null;
}
