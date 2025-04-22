import { makeStore } from '@/app/store';

declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app
   * and use it in @/shared/model/hooks.ts
   */
  declare type RootState = import('./src/app/store/store').RootState;
  declare type AppStore = import('./src/app/store/store').AppStore;
  declare type AppDispatch = import('./src/app/store/store').AppDispatch;
}
export {};
