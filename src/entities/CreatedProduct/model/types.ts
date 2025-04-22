export interface CreatedProductContent {
  brand: string;
  category: string;
}

export interface CreatedProductFooter {
  price: number;
}

export interface CreatedProductCardProps {
  title: string;
  description?: string;
  content: CreatedProductContent;
  footer: CreatedProductFooter;
}
