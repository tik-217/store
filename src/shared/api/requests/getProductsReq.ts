import { axiosInstance } from '@/shared/api';
import { ProductsResponse } from '@/features/ProductsList/model';

export async function getProductsReq({ search }: { search?: string }) {
  return axiosInstance<ProductsResponse>({
    method: 'GET',
    url: `/products${search && '/search'}`,
    params: {
      q: search,
    },
  }).then(({ data }) => data);
}
