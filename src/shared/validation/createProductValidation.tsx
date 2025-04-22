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
    price: z.number({
      required_error: 'Поле обязательно',
      invalid_type_error: 'Должно быть число',
    }),
    stock: z.number({
      required_error: 'Поле обязательно',
      invalid_type_error: 'Должно быть число',
    }),
    brand: z.string().trim().min(1, {
      message: 'Поле обязательно',
    }),
  })
  .required({
    title: true,
    category: true,
    price: true,
    stock: true,
    brand: true,
  });
