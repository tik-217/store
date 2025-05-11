import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isAccess: boolean;
}

const initialState: InitialState = {
  isAccess: false,
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAccess(state, action: PayloadAction<boolean>) {
      state.isAccess = action.payload;
    },
  },
});

export const { setIsAccess } = actions;
export { reducer as authReducer };
