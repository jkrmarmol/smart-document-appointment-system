import { configureStore } from '@reduxjs/toolkit';
import orderSliceReducer from './kiosk/orderSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      kioskOrder: orderSliceReducer
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
