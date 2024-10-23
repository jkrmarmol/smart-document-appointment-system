import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./auth/authApiSlice";
import { loginSlice } from "./auth/loginSlice";
import { informationRegistrationSlice } from "./auth/informationRegistrationSlice";
import { dashboardApiSlice } from "./dashboardApiSlice";
import { registerSlice } from "./auth/registerSlice";

const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    informationRegistrationReducer: informationRegistrationSlice.reducer,
    registerReducer: registerSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [dashboardApiSlice.reducerPath]: dashboardApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([authApiSlice.middleware, dashboardApiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
