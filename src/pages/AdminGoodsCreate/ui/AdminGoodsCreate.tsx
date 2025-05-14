'use client';

import { useRef } from 'react';
import { AdminGoodsLayout } from '@/widgets/AdminGoodsLayout';
import { useAnimation } from '@/widgets/UpdateGoods';
import { CreateProduct } from '@/features/CreateProduct';

export const AdminGoodsCreate = () => {
  const formTitle = 'Создать товар';
  const oldTitle = 'Страница создания товара';
  const container = useRef(null);
  useAnimation({ newTitle: formTitle, container });

  return (
    <AdminGoodsLayout>
      <div className={'container space-y-8'} ref={container}>
        <h2
          className={
            'createTitle font-black text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 uppercase'
          }
        >
          {oldTitle ?? formTitle}
        </h2>
        <CreateProduct />
      </div>
    </AdminGoodsLayout>
  );
};
