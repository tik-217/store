'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ProductsList } from '@/features/ProductsList';
import { Button } from '@/shared/shadcn';
import { useAnimation } from './useAnimation';

export const Main = () => {
  const container = useRef(null);

  useAnimation({ container });

  return (
    <>
      <header className={'my-[50px] w-full text-center'}>
        <nav>
          <Link href={'/admin/goods'}>
            <Button>Войти в панель</Button>
          </Link>
        </nav>
      </header>
      <main className={'w-full flex items-center flex-col gap-[50px]'}>
        <div
          className={
            'container w-full max-w-[500px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'
          }
          ref={container}
        >
          <h1 className={'productsTitle text-[37px] font-black'}>PRODUCTS</h1>
        </div>
        <div className={'max-w-[500px] w-full flex flex-col gap-[10px]'}>
          <ProductsList />
        </div>
      </main>
    </>
  );
};
