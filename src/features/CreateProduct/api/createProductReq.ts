import { axiosInstance } from '@/shared/api';
import { ICreateProductFormData } from '@/shared/validation';

export const createProductReq = async ({ data }: { data: ICreateProductFormData }) => {
  return axiosInstance<ICreateProductFormData>({
    method: 'POST',
    url: '/products/add',
    data: data,
  }).then(({ data }) => data);
};
