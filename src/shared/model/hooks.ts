import { useDispatch, useSelector, useStore } from 'react-redux';

// eslint-disable-next-line
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// eslint-disable-next-line
export const useAppSelector = useSelector.withTypes<RootState>();
// eslint-disable-next-line
export const useAppStore = () => useStore<AppStore>();
