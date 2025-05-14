import { memo, useCallback, useMemo } from 'react';
import { ProductCard } from '@/entities/ProductCard';
import { useGetProducts } from '@/shared/api';
import { useDeleteProduct } from '../api';
import { toast } from 'sonner';
import { Toaster } from '@/shared/shadcn';
import { DeletePopover } from '@/shared/ui';
import { ProductCardDataReturn } from '../model';

export const AdminProductsList = memo(function AdminProductsList() {
  const { data: allProducts, isFetched } = useGetProducts();
  const { mutate } = useDeleteProduct();

  const handleDelete = useCallback(({ productId }: { productId: number }) => {
    mutate(
      { productId },
      {
        onSuccess: ({ data }) => {
          toast(`Товар ${data.title} успешно удален`);
        },
      },
    );
    // eslint-disable-next-line
  }, []);

  const productsList = useMemo<ProductCardDataReturn[] | undefined>(() => {
    if (!allProducts?.products) return;

    return allProducts.products.map((el) => ({
      ...el,
      content: {
        brand: el.brand,
        category: el.category,
        availabilityStatus: el.availabilityStatus,
        width: el.dimensions.width,
        height: el.dimensions.height,
      },
      footer: {
        price: el.price,
        discountPercentage: el.discountPercentage,
      },
    }));
    // eslint-disable-next-line
  }, [isFetched]);

  return (
    <div className={'flex flex-col gap-5'}>
      {productsList &&
        productsList.map((el, i) => (
          <div className={'flex flex-col gap-2'} key={el.id}>
            <ProductCard
              title={el.title}
              description={el.description}
              images={el.images}
              firstImagePriority={i === 0}
              content={el.content}
              footer={el.footer}
            />
            <DeletePopover productId={el.id} handleDelete={handleDelete} />
          </div>
        ))}
      <Toaster />
    </div>
  );
});
