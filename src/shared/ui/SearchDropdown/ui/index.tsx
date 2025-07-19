import { Loader2 } from 'lucide-react';
import { ScrollArea, Separator } from '@/shared/shadcn';
import { SearchDropdownProps } from '../model';

export const SearchDropdown = ({
  isLoading,
  searchResult,
  listItemHandler,
}: SearchDropdownProps) => {
  return (
    <>
      <div className={'absolute top-[40px] w-full z-20'}>
        <ScrollArea className="rounded-md border p-4 bg-white">
          <h4 className="mb-4 text-sm font-bold leading-none">Результат поиска</h4>

          {isLoading && (
            <div className={'w-full flex justify-center'}>
              <Loader2 className="animate-spin" />
            </div>
          )}

          <ul className={'list-none max-h-[325px]'}>
            {searchResult &&
              !isLoading &&
              searchResult.map((product, i, arr) => (
                <li
                  key={product.id}
                  className={'cursor-pointer'}
                  onClick={() => listItemHandler(product)}
                >
                  <p className={'hover:bg-gray-100 py-2 pl-2'}>{product.title}</p>
                  {arr.length !== i + 1 && <Separator />}
                </li>
              ))}
          </ul>
          {searchResult && !searchResult.length && !isLoading && 'Товар не найден.'}
        </ScrollArea>
      </div>
    </>
  );
};
