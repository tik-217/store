import { useQuery } from '@tanstack/react-query';
import { getProductsReq } from '../requests/getProductsReq';

export const useGetProducts = (search?: string) => {
  return useQuery({
    queryKey: ['product', search],
    queryFn: () =>
      getProductsReq({ search }).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
    enabled: !!search?.length,
  });
};
