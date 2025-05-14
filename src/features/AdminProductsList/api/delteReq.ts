import { axiosInstance } from '@/shared/api';
import { DeleteProduct } from '@/features/AdminProductsList/model';

export function deleteReq({ productId }: { productId: number }) {
  return axiosInstance<DeleteProduct>({
    method: 'DELETE',
    url: `/products/${productId}`,
  });
}
