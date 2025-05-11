'use client';

import { useEffect, useState } from 'react';
import { Input, Label } from '@/shared/shadcn';
import { useDebounce } from '@/shared/inputHelpers';
import { useGetProducts } from '@/shared/api';
import { SearchDropdown, SearchResult } from '@/shared/ui';
import { useGetOneProduct } from '@/shared/api';
import { useAppDispatch } from '@/shared/model';
import { setProductToUpdate } from '@/entities/SearchProductsModel';

export const SearchProducts = () => {
  const [open, setOpen] = useState(false);
  const [productIsSelected, setProductIsSelected] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchProductId, setSearchProductId] = useState(0);
  const debounceValue = useDebounce(inputValue, 700);

  const dispatch = useAppDispatch();

  const { data: allProducts, isPending: allProductsPending } =
    useGetProducts(searchText);
  const { data: oneProduct } = useGetOneProduct(searchProductId);

  useEffect(() => {
    if (debounceValue) {
      setSearchText(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (inputValue.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    return () => {
      setProductIsSelected(false);
    };
  }, [inputValue]);

  useEffect(() => {
    if (productIsSelected) {
      setOpen(false);
    }
    // eslint-disable-next-line
  }, [open, debounceValue]);

  useEffect(() => {
    if (oneProduct) {
      const { id, title, description, brand, category, price, stock } =
        oneProduct;

      dispatch(
        setProductToUpdate({
          id,
          title,
          description,
          category,
          brand,
          stock: `${stock}`,
          price: `${price}`,
        }),
      );
    }
    // eslint-disable-next-line
  }, [oneProduct]);

  const customLoading = inputValue !== searchText && !allProductsPending;

  function searchDropdownHandler(searchProduct: SearchResult) {
    setSearchProductId(searchProduct.id);
    setInputValue(searchProduct.title);
    setOpen(false);
    setProductIsSelected(true);
  }

  return (
    <div className={'mb-[20px]'}>
      <Label htmlFor={'search'} className={'pb-[10px]'}>
        Найти товар
      </Label>

      <div className={'relative flex flex-col gap-2'}>
        <Input
          type="search"
          placeholder="Товар..."
          className="w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {open && allProducts && (
          <SearchDropdown
            isLoading={customLoading}
            searchResult={allProducts.products}
            listItemHandler={searchDropdownHandler}
          />
        )}
      </div>
    </div>
  );
};
