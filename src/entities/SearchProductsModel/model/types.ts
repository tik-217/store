import { ICreateProductFormData } from '@/shared/validation';

export interface InitialState {
  productToUpdate: ICreateProductForm;
}

export interface ICreateProductForm extends ICreateProductFormData {
  id: number;
}
