'use client';

import { useEffect, useState } from 'react';
import { Label, Input, ScrollArea, Separator } from '@/shared/shadcn';
import { useDebounce } from '@/shared/inputHelpers';
import { useGetProducts } from '@/shared/api';
import { Loader2 } from 'lucide-react';

export const SearchProducts = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const debounceValue = useDebounce(value, 700);

  const { data, isPending } = useGetProducts(searchText);

  useEffect(() => {
    if (debounceValue) {
      setSearchText(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (value.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [value]);

  const customLoading = value !== searchText && !isPending;

  return (
    <div className={'mb-[20px]'}>
      <Label htmlFor={'search'} className={'pb-[10px]'}>
        Найти товар
      </Label>

      <div className={'relative flex flex-col gap-2'}>
        <Input
          placeholder={'Товар...'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {open && (
          <div className={'absolute top-[40px] w-full z-20'}>
            <ScrollArea className="h-72 rounded-md border p-4 bg-white">
              <h4 className="mb-4 text-sm font-bold leading-none">
                Результат поиска
              </h4>

              {customLoading && (
                <div className={'w-full flex justify-center'}>
                  <Loader2 className="animate-spin" />
                </div>
              )}

              <ul className={'list-none'}>
                {data &&
                  !customLoading &&
                  data.products.map((el, i, arr) => (
                    <li key={el.id} className={'cursor-pointer'}>
                      <p className={'hover:bg-gray-100 py-2 pl-2'}>
                        {el.title}
                      </p>
                      {arr.length !== i + 1 && <Separator />}
                    </li>
                  ))}
              </ul>
              {data && !data.products.length && 'Товар не найден.'}
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};
