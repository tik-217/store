import { z } from 'zod';
import { createProductValidation } from '@/shared/validation';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type IProductForm = UseFormReturn<
  z.infer<typeof createProductValidation>
>;

export interface ProductFormProps {
  form: IProductForm;
  onSubmit: SubmitHandler<IProductFormData>;
  isPending: boolean;
  formTitle: string;
  oldTitle?: string;
}

export type IProductFormData = z.infer<typeof createProductValidation>;
