import { v4 as uuidv4 } from 'uuid';
import { ProductCardSkeleton } from '@/entities/ProductCard';

export function ProductsListLoader({ isPending }: { isPending: boolean }) {
  return (
    isPending &&
    Array(10)
      .fill([])
      .map(() => <ProductCardSkeleton key={uuidv4()} />)
  );
}
