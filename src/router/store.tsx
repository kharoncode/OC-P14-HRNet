import { createEmployeeSlice } from '@/pages/createEmployee/createEmployeeSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

const reducers = combineReducers({
   createEmployee: createEmployeeSlice.reducer,
});

export const store = configureStore({
   reducer: reducers,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
