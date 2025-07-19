import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { createProductValidation } from '@/shared/validation';

export type IProductForm = UseFormReturn<z.infer<typeof createProductValidation>>;

export interface ProductFormProps {
  form: IProductForm;
  onSubmit: SubmitHandler<IProductFormData>;
  isPending: boolean;
}

export type IProductFormData = z.infer<typeof createProductValidation>;
