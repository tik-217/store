import { configureStore, Store } from '@reduxjs/toolkit';
import { searchProductReducer } from '@/entities/SearchProductsModel';
import { authReducer } from '@/shared/storeSlices';

export const makeStore = (): Store =>
  configureStore({
    reducer: {
      searchProduct: searchProductReducer,
      auth: authReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
