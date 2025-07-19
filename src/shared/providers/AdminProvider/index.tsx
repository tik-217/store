'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const redirectFromPath = ['login'];

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && redirectFromPath.includes(pathname)) {
      router.push('/');
    }

    if (!pathname) {
      console.log('pathname is missing');
      router.push('/');
    }
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
