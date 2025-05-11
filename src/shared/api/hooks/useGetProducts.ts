import { useQuery } from '@tanstack/react-query';
import { getProductsReq } from '@/shared/api';

export const useGetProducts = ({
  limit,
  search,
}: {
  limit?: number;
  search?: string;
}) => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () =>
      getProductsReq({ limit, search }).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
  });
};
