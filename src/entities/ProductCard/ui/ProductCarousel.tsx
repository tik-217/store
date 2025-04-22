import {
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/shadcn';
import Image from 'next/image';
import { ProductCarouselProps } from '../model/types';

export function ProductCarousel({
  images,
  isPriority = false,
}: ProductCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {images.map((el, index) => (
          <CarouselItem key={index} className="">
            <div className="flex aspect-square items-center justify-center p-2">
              <AspectRatio ratio={16 / 9} className={'w-full'}>
                <Image
                  src={el}
                  alt={el.split('/').at(-1) ?? ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={
                    'w-auto! top-[50%]! left-[50%]! translate-[-50%] select-none'
                  }
                  priority={isPriority}
                />
              </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
