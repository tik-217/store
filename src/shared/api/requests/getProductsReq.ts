import { axiosInstance } from '@/shared/api';
import { Products } from '../model';

export async function getProductsReq({ limit, search }: { limit?: number; search?: string }) {
  const searchPath = search !== undefined ? '/search' : '';

  return axiosInstance<Products>({
    method: 'GET',
    url: `/products${searchPath}`,
    params: {
      q: search,
      limit,
    },
  }).then(({ data }) => data);
}
