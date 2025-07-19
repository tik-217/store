import { DeleteProduct } from '@/features/AdminProductsList/model';
import { axiosInstance } from '@/shared/api';

export function deleteReq({ productId }: { productId: number }) {
  return axiosInstance<DeleteProduct>({
    method: 'DELETE',
    url: `/products/${productId}`,
  });
}
