import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReservationsState {
  value: string[];
}

const initialState: ReservationsState = {
  value: ["Ayrton"],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
