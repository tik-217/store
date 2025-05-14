import { z } from 'zod';
import { updateProductValidation } from '@/shared/validation';

export type AdminGoodsUpdateForm = z.infer<typeof updateProductValidation>;
