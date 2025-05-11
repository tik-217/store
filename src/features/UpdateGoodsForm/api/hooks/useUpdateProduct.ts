import { useMutation } from '@tanstack/react-query';
import { updateProductReq } from '../updateProductReq';
import { AdminGoodsUpdateForm } from '@/shared/validation';
import { AxiosError } from 'axios';

interface UpdateProductProps {
  productId: number;
  updateData: AdminGoodsUpdateForm;
}

export const useUpdateProduct = () => {
  return useMutation({
    mutationKey: ['updateProduct'],
    mutationFn: async (props: UpdateProductProps) =>
      updateProductReq(props).catch((err: AxiosError) => {
        return new Error(err.response?.statusText);
      }),
  });
};
