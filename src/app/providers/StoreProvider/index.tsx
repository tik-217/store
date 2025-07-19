'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { makeStore } from '@/app/store';
import type { AppStore } from '@/app/store';

export function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
