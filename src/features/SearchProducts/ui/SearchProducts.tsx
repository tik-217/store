'use client';

import { useEffect, useState } from 'react';
import { setProductToUpdate } from '@/entities/SearchProductsModel';
import { useGetOneProduct, useGetProducts } from '@/shared/api';
import { useDebounce } from '@/shared/inputHelpers';
import { useAppDispatch } from '@/shared/model';
import { Input, Label } from '@/shared/shadcn';
import { SearchDropdown, SearchResult } from '@/shared/ui';

export const SearchProducts = () => {
  const [open, setOpen] = useState(false);
  const [productIsSelected, setProductIsSelected] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchProductId, setSearchProductId] = useState(0);
  const debounceValue = useDebounce(inputValue, 700);

  const dispatch = useAppDispatch();

  const { data: allProducts, isPending: allProductsPending } = useGetProducts(
    searchText,
    undefined,
  );
  const { data: oneProduct } = useGetOneProduct(searchProductId);

  useEffect(() => {
    if (debounceValue) {
      setSearchText(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    setOpen(!!inputValue.length);

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
      const { id, title, description, brand, category, price, stock } = oneProduct;

      dispatch(
        setProductToUpdate({
          id,
          title,
          description,
          category,
          brand,
          stock: stock,
          price: price,
        }),
      );
    }
    // eslint-disable-next-line
  }, [searchText]);

  const customLoading = inputValue !== searchText && !allProductsPending;

  function searchDropdownHandler(searchProduct: SearchResult) {
    setSearchProductId(searchProduct.id);
    setInputValue(searchProduct.title);
    setOpen(false);
    setProductIsSelected(true);
  }

  return (
    <div>
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
