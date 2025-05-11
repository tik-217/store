import { z } from 'zod';

export const updateProductValidation = z
  .object({
    title: z.string().trim().min(1, {
      message: 'Поле обязательно',
    }),
    description: z.string().trim(),
    category: z.string().trim(),
    price: z.string(),
    stock: z.string(),
    brand: z.string().trim().optional(),
  })
  .required({
    title: true,
  });
