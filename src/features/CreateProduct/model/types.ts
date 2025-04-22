import { z } from 'zod';
import { createProductValidation } from '@/shared/validation';
import { RefObject } from 'react';

export type ICreateProductFormData = z.infer<typeof createProductValidation>;

export interface UseAnimationProps {
  resetForm: boolean;
  isSuccess: boolean;
  container: RefObject<null>;
}
