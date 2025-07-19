import { ProductContent, ProductFooter } from '@/entities/ProductCard';
import { Product } from '@/shared/api';

export interface DeleteProduct extends Product {
  isDeleted: boolean;
  deletedOn: string;
}

export interface ProductCardDataReturn extends Product {
  content: ProductContent;
  footer: ProductFooter | undefined;
}
