export { axiosInstance } from './axios';
export { useGetProducts } from './hooks/useGetProducts';
export { useGetOneProduct } from './hooks/useGetOneProduct';
export { getProductsReq } from './requests/getProductsReq';
export { auth } from './requests/auth';
export type { Products, Product, UserResponse, User } from './model';
export { refreshAuthSession } from './requests/refreshAuthSession';
