import { useRef } from 'react';
import { ProductCard } from '@/entities/ProductCard';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/shadcn';
import { useGetProducts } from '@/shared/api';

export const AdminProductsList = () => {
  const { data } = useGetProducts({ limit: 10 });
  const containerProduct = useRef<HTMLDivElement | null>(null);

  return (
    <div className={'flex flex-col gap-5'}>
      {data &&
        data.products.map((el, i) => (
          <div
            className={'flex flex-col gap-2'}
            ref={containerProduct}
            key={el.id}
          >
            <ProductCard
              title={el.title}
              description={el.description}
              images={el.images}
              firstImagePriority={i === 0}
              key={el.id}
              content={{
                brand: el.brand,
                category: el.category,
                width: el.dimensions.width,
                height: el.dimensions.height,
                availabilityStatus: el.availabilityStatus,
              }}
              footer={{
                price: el.price,
                discountPercentage: el.discountPercentage,
              }}
            />
            <Popover>
              <PopoverTrigger className={'w-full'} asChild>
                {/*<Button variant={'outline'} className={'w-full'}>*/}
                <span>Удалить</span>
                {/*</Button>*/}
              </PopoverTrigger>
              <PopoverContent>
                <div className={'flex flex-col gap-2'}>
                  <span>Вы уверены, что хотите удалить товар?</span>
                  <Button variant={'destructive'}>Удалить</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ))}
    </div>
  );
};
