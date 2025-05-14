import { SearchProducts } from '@/features/SearchProducts';
import { UpdateGoodsForm } from '@/features/UpdateGoodsForm';
import { Toaster } from '@/shared/shadcn';
import { useAnimation } from './hooks/useAnimation';
import { useRef } from 'react';

export const UpdateGoods = () => {
  const formTitle = 'Обновить товар';
  const oldTitle = 'Страница обновления товара';
  const container = useRef(null);
  useAnimation({ newTitle: formTitle, container });

  return (
    <div className={'container space-y-8'} ref={container}>
      <h2
        className={
          'createTitle font-black text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 uppercase'
        }
      >
        {oldTitle ?? formTitle}
      </h2>
      <div className={'mb-[70px]'}>
        <SearchProducts />
      </div>
      <UpdateGoodsForm />
      <Toaster />
    </div>
  );
};
