import { axiosInstance } from '@/shared/api';
import { AdminGoodsUpdateForm } from '@/shared/validation';

export const updateProductReq = async ({
  productId,
  updateData,
}: {
  productId: number;
  updateData: AdminGoodsUpdateForm;
}) => {
  return axiosInstance({
    method: 'PUT',
    url: `/products/${productId}`,
    data: updateData,
  }).then(({ data }) => data);
};
