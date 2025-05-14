import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { useGetProducts } from '@/shared/api';
import { ProductsListLoader } from './';
import { ProductCard } from '@/entities/ProductCard';
import { useAnimationNumber } from './hooks/useAnimationNumber';

export const ProductsList = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const containerProduct = useRef<HTMLDivElement | null>(null);
  const [amountNumber, setAmountNumber] = useState<number | null>(null);
  const [limitNumber, setLimitNumber] = useState<number | null>(null);

  const { data, isPending, isSuccess } = useGetProducts();

  useAnimationNumber({
    container,
    finalNumber: amountNumber,
    animationName: 'amountNumber',
    isSuccess,
  });

  useAnimationNumber({
    container,
    finalNumber: limitNumber,
    animationName: 'limitNumber',
    isSuccess,
  });

  useEffect(() => {
    if (data) setAmountNumber(data.total);
    // eslint-disable-next-line
  }, [isSuccess]);

  useEffect(() => {
    if (data) setLimitNumber(data.limit);
    // eslint-disable-next-line
  }, [isSuccess]);

  return (
    <>
      <div
        className={clsx(isPending && 'mt-[20px]', 'flex flex-col gap-[10px]')}
      >
        <ProductsListLoader isPending={isPending} />
      </div>

      {data && (
        <>
          <article className={'flex gap-[20px] mt-[-20px]'} ref={container}>
            <section>
              <span>Кол товаров: </span>
              <span className={'font-bold'} data-animate={'amountNumber'}>
                {data.total}
              </span>
            </section>
            <section>
              <span>На странице: </span>
              <span className={'font-bold'} data-animate={'limitNumber'}>
                {data.limit}
              </span>
            </section>
          </article>

          <ul className={'flex flex-col gap-2'}>
            {data.products.map((el, i) => (
              <li key={el.id}>
                <div ref={containerProduct}>
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
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
