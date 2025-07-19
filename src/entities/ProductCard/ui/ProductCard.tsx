import { memo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/shadcn';
import { ProductCardProps } from '../model';
import { ProductCarousel } from './ProductCarousel';

export const ProductCard = memo(function ProductCard({
  title,
  description,
  content: { brand, category, width, height, availabilityStatus },
  images,
  firstImagePriority = false,
  footer,
}: ProductCardProps) {
  return (
    <Card className={'gap-[10px]'}>
      <CardHeader>
        <CardTitle>Продукт - {title}</CardTitle>
        {description && (
          <CardDescription className={'max-w-[400px] overflow-hidden line-clamp-2'}>
            Описание: {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div>
          <div className={'grid gap-1 grid-rows-3 grid-flow-col'}>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Бренд:</span> {brand}
            </span>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Категория:</span> {category}
            </span>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Ширина:</span> {width}
            </span>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Высота:</span> {height}
            </span>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Доступность:</span>{' '}
              {availabilityStatus}
            </span>
          </div>
          <div className={'flex justify-center mt-[10px]'}>
            <ProductCarousel images={images} isPriority={firstImagePriority} />
          </div>
        </div>
      </CardContent>
      {footer && (
        <CardFooter>
          <div className={'flex gap-2'}>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Стоимость:</span> {footer.price}
              $
            </span>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>Скидка:</span>{' '}
              {footer.discountPercentage}%
            </span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
});
