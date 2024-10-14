import { MenuItem, OrderSliceInitialState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: OrderSliceInitialState = {
  order: []
};

const orderSlice = createSlice({
  name: 'kiosk/order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<MenuItem>) => {
      state.order.push(action.payload);
    },
    removeFromOrder: (state, action: PayloadAction<string>) => {
      const itemIndex = state.order.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.order.splice(itemIndex, 1);
      }
    },
    cleanUpOrder: (state) => {
      state.order = [];
    }
  },
  extraReducers(builder) {}
});

export const { addToOrder, removeFromOrder, cleanUpOrder } = orderSlice.actions;
export default orderSlice.reducer;
