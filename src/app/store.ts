import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import ordersReducer from "../features/orderSlice";
import loginReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    orders: ordersReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
