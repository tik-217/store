import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { ProductForm } from '@/entities/ProductForm';
import { useAppSelector } from '@/shared/model';
import { AdminGoodsUpdateForm, updateProductValidation } from '@/shared/validation';
import { useUpdateProduct } from '../api';

export const UpdateGoodsForm = () => {
  const form = useForm<AdminGoodsUpdateForm>({
    resolver: zodResolver(updateProductValidation),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      price: 0,
      stock: 0,
      brand: '',
    },
  });

  const productToUpdate = useAppSelector((state) => state.searchProduct.productToUpdate);

  console.log(productToUpdate);

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
    />
  );
};
