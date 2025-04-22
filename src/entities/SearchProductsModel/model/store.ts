import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  productId: '',
};

export const { actions, reducer } = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {
    setSearchProduct(state: RootState, payload: PayloadAction<string>) {
      state;
    },
  },
});

export const { setSearchProduct } = actions;
export { reducer as searchProductReducer };
