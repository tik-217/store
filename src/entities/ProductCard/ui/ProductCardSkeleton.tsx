import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/shadcn';

export const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-full" />
        </CardTitle>
        <CardDescription
          className={'max-w-[400px] h-[32px] overflow-hidden line-clamp-4'}
        >
          <Skeleton className="h-8 w-full" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'grid gap-1 grid-rows-3 grid-flow-col'}>
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
        <div className={'flex justify-center mt-[10px]'}>
          <Skeleton className="h-[364px] w-full" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-6 w-full" />
      </CardFooter>
    </Card>
  );
};
