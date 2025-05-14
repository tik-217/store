import { z } from 'zod';

export const createProductValidation = z
  .object({
    title: z.string().trim().min(1, {
      message: 'Поле обязательно',
    }),
    description: z.string().trim(),
    category: z.string().trim().min(1, {
      message: 'Поле обязательно',
    }),
    price: z.number().positive('Число должно быть положительным'),
    stock: z.number().positive('Число должно быть положительным'),
    brand: z.string().trim().optional(),
  })
  .required({
    title: true,
    category: true,
    price: true,
    stock: true,
  });
