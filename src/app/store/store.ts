import { configureStore } from '@reduxjs/toolkit';
import { searchProductReducer } from '@/entities/SearchProductsModel';

export const makeStore = () =>
  configureStore({
    reducer: {
      searchProduct: searchProductReducer,
    },
  });

export type AppDispatch = AppStore['dispatch'];
