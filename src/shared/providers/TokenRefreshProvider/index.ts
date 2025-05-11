'use client';

import { useEffect } from 'react';

export function TokenRefreshProvider() {
  useEffect(() => {
    const accessToken = localStorage.getItem('dj-access');

    const interval = setInterval(async () => {
      const res = await fetch('/api/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const resJson = res.json();
      const data = await resJson;
      console.log(data);
      console.log(123);
    }, 1000 * 10); // каждые 5 минут

    return () => clearInterval(interval);
  }, []);

  return null;
}
