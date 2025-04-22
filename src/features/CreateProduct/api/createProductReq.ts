import { axiosInstance } from '@/shared/api';
import { ICreateProductFormData } from '../model';

export const createProductReq = async ({
  data,
}: {
  data: ICreateProductFormData;
}) => {
  console.log('data', data);
  return axiosInstance<ICreateProductFormData>({
    method: 'POST',
    url: '/products/add',
    data: data,
  }).then(({ data }) => data);
};
