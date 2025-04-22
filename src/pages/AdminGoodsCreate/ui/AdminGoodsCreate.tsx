'use client';

import { AdminGoodsLayout } from '@/widgets/AdminGoodsLayout';
import { CreateProduct } from '@/features/CreateProduct';

export const AdminGoodsCreate = () => {
  return (
    <AdminGoodsLayout>
      <CreateProduct />
    </AdminGoodsLayout>
  );
};
