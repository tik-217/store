'use client';

import { ProductsList } from '@/features/ProductsList';

export const Main = () => {
  return (
    <div className={'w-full flex items-center flex-col gap-[30px] mt-[70px]'}>
      <div className={'w-full max-w-[500px] w-full'}>
        <h1 className={'text-[40px] font-bold'}>Products</h1>
      </div>
      <div className={'max-w-[500px] w-full flex flex-col gap-[10px]'}>
        <ProductsList />
      </div>
    </div>
  );
};
