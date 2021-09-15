import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToOrderPayload {
  id: string;
  food: string;
}

export interface OrdersState {
  value: Order[];
}

const initialState: OrdersState = {
  value: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.value.push(action.payload);
    },
    addFoodToOrder: (state, action: PayloadAction<AddFoodToOrderPayload>) => {
      state.value.forEach((order) => {
        if (order.id === action.payload.id) {
          order.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addOrder, addFoodToOrder } = orderSlice.actions;

export default orderSlice.reducer;
