import { MenuItem, OrderSliceInitialState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState: OrderSliceInitialState = {
  order: [],
  openModalConfirmationOrder: false,
  orderData: {
    orderItem: [],
    shippingOptions: '',
    address: {
      googleMapAddress: '',
      longitude: 0,
      latitude: 0,
      additionalAddress: ''
    },
    schedule: new Date(),
    paymentMethod: ''
  }
};

const orderSlice = createSlice({
  name: 'kiosk/order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<MenuItem>) => {
      const itemExists = state.order.some((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.order.push(action.payload);
        state.orderData.orderItem.push(action.payload);
      }
    },
    setOpenModalConfirmationOrder: (state, action: PayloadAction<boolean>) => {
      state.openModalConfirmationOrder = action.payload;
    },
    removeFromOrder: (state, action: PayloadAction<string>) => {
      const itemIndex = state.order.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.order.splice(itemIndex, 1);
        state.orderData.orderItem.splice(itemIndex, 1);
      }
    },
    cleanUpOrder: (state) => {
      state.order = [];
    },
    setOrderDataShippingOptions: (state, action: PayloadAction<string>) => {
      state.orderData.shippingOptions = action.payload;
    },
    setOrderDataAddress: (
      state,
      action: PayloadAction<{
        googleMapAddress: '';
        longitude: 0;
        latitude: 0;
        additionalAddress: '';
      }>
    ) => {
      state.orderData.address = action.payload;
    },
    setOrderDataSchedule: (state, action: PayloadAction<Date>) => {
      state.orderData.schedule = action.payload;
    },
    setOrderDataPaymentMethod: (state, action: PayloadAction<string>) => {
      state.orderData.paymentMethod = action.payload;
    },
    cleanUpOrderData: (state) => {
      state.order = [];
      state.orderData = {
        orderItem: [],
        shippingOptions: '',
        address: {
          googleMapAddress: '',
          longitude: 0,
          latitude: 0,
          additionalAddress: ''
        },
        schedule: new Date(),
        paymentMethod: ''
      };
    }
  },
  extraReducers(builder) {}
});

export const {
  addToOrder,
  removeFromOrder,
  cleanUpOrder,
  setOrderDataAddress,
  setOrderDataPaymentMethod,
  setOrderDataSchedule,
  setOrderDataShippingOptions,
  cleanUpOrderData,
  setOpenModalConfirmationOrder
} = orderSlice.actions;
export default orderSlice.reducer;
