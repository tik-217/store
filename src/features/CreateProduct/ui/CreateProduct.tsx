'use client';

import { useRef, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductForm } from '@/entities/ProductForm';
import { CreatedProduct } from '@/entities/CreatedProduct';
import { useCreateProduct } from '../api';
import {
  createProductValidation,
  ICreateProductFormData,
} from '@/shared/validation';
import { Button } from '@/shared/shadcn';
import { useAnimation } from './useAnimation';

export const CreateProduct = () => {
  const container = useRef(null);
  const [resetForm, setResetForm] = useState(false);

  const form: UseFormReturn<ICreateProductFormData> =
    useForm<ICreateProductFormData>({
      resolver: zodResolver(createProductValidation),
      defaultValues: {
        title: '',
        description: '',
        price: undefined,
        stock: undefined,
        category: '',
        brand: '',
      },
    });
  const { mutate, data, isPending, isSuccess } = useCreateProduct();

  function onSubmit(values: ICreateProductFormData) {
    mutate({ data: values });
    setResetForm(false);
  }

  useAnimation({ resetForm, isSuccess, container });

  return (
    <>
      <div className={'container relative'} ref={container}>
        <div>
          <div className={'mt-3 absolute top-0 left-[-640px] w-full'}>
            {data && (
              <div className={'newProduct flex flex-col gap-5'}>
                <h3
                  className={
                    'createTitle font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 uppercase'
                  }
                >
                  Новый товар
                </h3>

                <CreatedProduct
                  title={data.title}
                  content={{
                    brand: data.brand ?? '',
                    category: data.category,
                  }}
                  footer={{
                    price: +data.price,
                  }}
                />
                <Button
                  className={'w-min mt-[30px]'}
                  onClick={() => setResetForm(true)}
                >
                  Создать товар
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className={'formCreateProduct'}>
          <ProductForm form={form} onSubmit={onSubmit} isPending={isPending} />
        </div>
      </div>
    </>
  );
};
