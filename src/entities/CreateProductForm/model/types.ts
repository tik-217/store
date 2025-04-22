import { z } from 'zod';
import { createProductValidation } from '@/shared/validation';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface CreateProductFormProps {
  form: ICreateProductForm;
  onSubmit: SubmitHandler<ICreateProductFormData>;
  isPending: boolean;
}

export type ICreateProductFormData = z.infer<typeof createProductValidation>;

export type ICreateProductForm = UseFormReturn<
  z.infer<typeof createProductValidation>
>;
