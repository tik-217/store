declare global {
  declare type AppStore = import('@/app/store').AppStore;
  declare type RootState = import('@/app/store').RootState;
  declare type AppDispatch = import('@/app/store').AppDispatch;
}
export {};
