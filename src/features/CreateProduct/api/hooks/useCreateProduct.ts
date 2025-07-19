import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createProductReq } from '@/features/CreateProduct/api/createProductReq';
import { ICreateProductFormData } from '@/shared/validation';

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ['createProduct'],
    mutationFn: async ({ data }: { data: ICreateProductFormData }) =>
      createProductReq({ data }).catch((err: AxiosError) => {
        console.log(err);
        throw new Error(`${err.response?.data}`);
      }),
  });
};
