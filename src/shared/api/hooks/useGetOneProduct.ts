import { useQuery } from '@tanstack/react-query';
import { getOneProductReq } from '../requests/getOneProductReq';

export const useGetOneProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () =>
      getOneProductReq({ id }).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
    enabled: id !== 0,
  });
};
