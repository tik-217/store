import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ProductForm } from '@/entities/ProductForm';
import {
  AdminGoodsUpdateForm,
  updateProductValidation,
} from '@/shared/validation';
import { useAppSelector } from '@/shared/model';
import { useUpdateProduct } from '../api';
import { toast } from 'sonner';
import { useEffect } from 'react';

export const UpdateGoodsForm = () => {
  const form = useForm<AdminGoodsUpdateForm>({
    resolver: zodResolver(updateProductValidation),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      price: '',
      stock: '',
      brand: '',
    },
  });

  const productToUpdate = useAppSelector(
    (state) => state.searchProduct.productToUpdate,
  );

  const { mutate } = useUpdateProduct();

  const onSubmit = (productId: number, data: AdminGoodsUpdateForm) => {
    mutate(
      { productId, updateData: data },
      {
        onSuccess() {
          toast('Товар обновлен', {
            description: new Date().toLocaleString(),
            action: {
              label: 'Ok',
              onClick: () => {},
            },
          });
        },
      },
    );
  };

  useEffect(() => {
    const resetValues = {
      ...productToUpdate,
      brand: productToUpdate.brand ?? '',
    };

    form.reset(resetValues);
  }, [productToUpdate, form]);

  return (
    <ProductForm
      form={form}
      onSubmit={(data) => onSubmit(productToUpdate.id, data)}
      isPending={false}
      formTitle={'Обновить товар'}
      oldTitle={'Страница обновления товара'}
    />
  );
};
