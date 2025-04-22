import { useQuery } from '@tanstack/react-query';
import { getProductsReq } from '../getProductsReq';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () =>
      getProductsReq().catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
  });
};
