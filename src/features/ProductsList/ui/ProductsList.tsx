import { ProductCard } from '@/entities/ProductCard';
import { useGetProducts } from '../api';
import { ProductsListLoader } from './';
import { clsx } from 'clsx';

export const ProductsList = () => {
  const { data, isPending } = useGetProducts();

  return (
    <>
      <div
        className={clsx(isPending && 'mt-[20px]', 'flex flex-col gap-[10px]')}
      >
        <ProductsListLoader isPending={isPending} />
      </div>

      {data && (
        <>
          <div className={'flex gap-[20px] mt-[-20px]'}>
            <div>
              <span>
                Кол товаров: <span className={'font-bold'}>{data.total}</span>
              </span>
            </div>
            <div>
              <span>
                На странице: <span className={'font-bold'}>{data.limit}</span>
              </span>
            </div>
          </div>

          {data.products.map((el, i) => (
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
          ))}
        </>
      )}
    </>
  );
};
