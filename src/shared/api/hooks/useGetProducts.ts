import { useQuery } from '@tanstack/react-query';
import { getProductsReq } from '@/shared/api';

export const useGetProducts = (
  search?: string,
  limit: number | undefined = 10,
) => {
  return useQuery({
    queryKey: ['product', search],
    queryFn: () =>
      getProductsReq({ limit, search }).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
  });
};
