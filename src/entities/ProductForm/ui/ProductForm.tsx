'use client';

import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/shadcn';
import { FormProvider } from 'react-hook-form';
import { ProductFormProps } from '../model';
import { Loader2 } from 'lucide-react';
import { useAnimation } from './useAnimation';
import { useRef } from 'react';

export const ProductForm = ({
  form,
  onSubmit,
  isPending,
  formTitle,
  oldTitle,
}: ProductFormProps) => {
  const container = useRef(null);

  useAnimation({ newTitle: formTitle, container });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'container space-y-8'}
        ref={container}
      >
        <h2
          className={
            'createTitle font-black text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 uppercase'
          }
        >
          {oldTitle ?? formTitle}
        </h2>
        <div className="gap-10 grid grid-cols-2 items-baseline">
          <FormField
            control={form.control}
            name={'title'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input placeholder="Ведите название" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Input placeholder="Ведите описание" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Категория</FormLabel>
                <FormControl>
                  <Input placeholder="Ведите категорию" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Бренд</FormLabel>
                <FormControl>
                  <Input placeholder="Ведите бренд" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ведите цену"
                    {...field}
                    type={'number'}
                    value={field.value ?? ''}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Количество</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ведите количество"
                    {...field}
                    type={'number'}
                    value={field.value ?? ''}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormDescription>
          Предупреждение: Запрос на создание товара произойдет, но он не
          появится в списке всех товаров. Это вызвано ограничением сервиса
          dummyjson.com
        </FormDescription>
        <Button type="submit" disabled={isPending}>
          {isPending && <Loader2 className="animate-spin" />}
          Создать
        </Button>
      </form>
    </FormProvider>
  );
};
