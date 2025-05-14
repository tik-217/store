import { configureStore } from '@reduxjs/toolkit';
import { searchProductReducer } from '@/entities/SearchProductsModel';

export const makeStore = () =>
  configureStore({
    reducer: {
      searchProduct: searchProductReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
