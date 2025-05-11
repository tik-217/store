import { z } from 'zod';
import { createProductValidation } from '@/shared/validation';

export type ICreateProductFormData = z.infer<typeof createProductValidation>;
