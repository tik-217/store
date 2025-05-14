import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/shadcn';
import { CreatedProductCardProps } from '../model/types';

export const CreatedProduct = ({
  title,
  description,
  content: { brand, category },
  footer,
}: CreatedProductCardProps) => {
  return (
    <Card className={'gap-[10px]'}>
      <CardHeader>
        <CardTitle>Продукт - {title}</CardTitle>
        {description && (
          <CardDescription
            className={'max-w-[400px] overflow-hidden line-clamp-2'}
          >
            Описание: {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div>
          <div className={'grid gap-1 grid-flow-col'}>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>
                Бренд:
              </span>{' '}
              {brand}
            </span>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>
                Категория:
              </span>{' '}
              {category}
            </span>
          </div>
        </div>
      </CardContent>
      {footer && (
        <CardFooter>
          <div className={'flex gap-2'}>
            <span>
              <span className={'text-muted-foreground text-[14px]'}>
                Стоимость:
              </span>{' '}
              {footer.price}$
            </span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
