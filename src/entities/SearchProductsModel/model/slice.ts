import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateProductForm, InitialState } from './types';

const initialState: InitialState = {
  productToUpdate: {
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    brand: '',
  },
};

export const { actions, reducer } = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {
    setProductToUpdate(state, action: PayloadAction<ICreateProductForm>) {
      state.productToUpdate = action.payload;
    },
  },
});

export const { setProductToUpdate } = actions;
export { reducer as searchProductReducer };
