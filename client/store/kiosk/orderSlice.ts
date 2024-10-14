import { MenuItem, OrderSliceInitialState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: OrderSliceInitialState = {
  order: [],
  openModalConfirmationOrder: false
};

const orderSlice = createSlice({
  name: 'kiosk/order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<MenuItem>) => {
      const itemExists = state.order.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.order.push(action.payload);
      }
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
    },
    setOpenModalConfirmationOrder: (state, action: PayloadAction<boolean>) => {
      state.openModalConfirmationOrder = action.payload;
    }
  },
  extraReducers(builder) {}
});

export const {
  addToOrder,
  removeFromOrder,
  cleanUpOrder,
  setOpenModalConfirmationOrder
} = orderSlice.actions;
export default orderSlice.reducer;
