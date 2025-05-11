'use client';

import { useEffect, useRef } from 'react';
import { ProductsList } from '@/features/ProductsList';
import { useAnimation } from './useAnimation';
import Link from 'next/link';
import { Button } from '@/shared/shadcn';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { setIsAccess } from '@/shared/storeSlices';

export const Main = () => {
  const isAccess = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const container = useRef(null);

  useAnimation({ container });

  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    dispatch(setIsAccess(!!accessToken));
  }, []);

  return (
    <>
      <header className={'my-[50px] w-full text-center'}>
        {isAccess ? (
          <Link href={'/admin'}>
            <Button>Войти в панель</Button>
          </Link>
        ) : (
          <Link href={'/admin'}>
            <Button>Выйти</Button>
          </Link>
        )}
      </header>
      <div className={'w-full flex items-center flex-col gap-[50px]'}>
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
      </div>
    </>
  );
};
