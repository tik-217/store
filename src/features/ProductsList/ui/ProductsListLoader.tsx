import { ProductCardSkeleton } from '@/entities/ProductCard';
import { v4 as uuidv4 } from 'uuid';

export function ProductsListLoader({ isPending }: { isPending: boolean }) {
  return (
    isPending &&
    Array(10)
      .fill([])
      .map(() => <ProductCardSkeleton key={uuidv4()} />)
  );
}
