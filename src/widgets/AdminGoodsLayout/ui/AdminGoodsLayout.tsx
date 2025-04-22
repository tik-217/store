'use client';

import { ReactNode } from 'react';
import { SearchProducts } from '@/features/SearchProducts';

export const AdminGoodsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'w-full'}>
      {/*<SearchProducts />*/}
      {children}
    </div>
  );
};
