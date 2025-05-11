interface ProductContent {
  brand?: string;
  category: string;
  width: number;
  height: number;
  availabilityStatus: string;
}

interface ProductFooter {
  price: number;
  discountPercentage: number;
}

export interface ProductCardProps {
  title: string;
  description?: string;
  content: ProductContent;
  images: string[];
  firstImagePriority?: boolean;
  footer?: ProductFooter;
}

export interface ProductCarouselProps {
  images: string[];
  isPriority?: boolean;
}
