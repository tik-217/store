import { axiosInstance } from '@/shared/api';
import { ProductsResponse } from '@/features/ProductsList/model';

export async function getProductsReq() {
  return axiosInstance<ProductsResponse>({
    method: 'GET',
    url: '/products',
  }).then(({ data }) => data);
}
