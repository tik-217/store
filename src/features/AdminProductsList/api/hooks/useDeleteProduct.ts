import { deleteReq } from '../delteReq';
import { useMutation } from '@tanstack/react-query';

export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ['deleteProduct'],
    mutationFn: async ({ productId }: { productId: number }) =>
      deleteReq({ productId }).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
  });
};
