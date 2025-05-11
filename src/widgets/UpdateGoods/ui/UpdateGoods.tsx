import { SearchProducts } from '@/features/SearchProducts';
import { UpdateGoodsForm } from '@/features/UpdateGoodsForm';
import { Toaster } from '@/shared/shadcn';

export const UpdateGoods = () => {
  return (
    <>
      <SearchProducts />
      <UpdateGoodsForm />
      <Toaster />
    </>
  );
};
