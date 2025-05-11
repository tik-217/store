import { axiosInstance } from '@/shared/api';
import { Product } from '../model';

export async function getOneProductReq({ id }: { id: number }) {
  return axiosInstance<Product>({
    method: 'GET',
    url: `/products/${id}`,
  }).then(({ data }) => data);
}
