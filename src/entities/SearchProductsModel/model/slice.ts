import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateProductFormData } from '@/shared/validation';

interface InitialState {
  productToUpdate: ICreateProductFormData;
}

const initialState: InitialState = {
  productToUpdate: {} as ICreateProductFormData,
};

export const { actions, reducer } = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {
    setProductToUpdate(
      state,
      action: PayloadAction<ICreateProductFormData & { id: number }>,
    ) {
      state.productToUpdate = action.payload;
    },
  },
});

export const { setProductToUpdate } = actions;
export { reducer as searchProductReducer };
