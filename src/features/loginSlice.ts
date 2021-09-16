import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  email: string;
  password: string;
  loggedIn: boolean;
  failedState: boolean;
}

interface SetFailed {
  failed: boolean;
}

const initialState: LoginState = {
  email: "email@email.com",
  password: "password",
  loggedIn: false,
  failedState: false,
};

export const loginSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    userLogIn: (state) => {
      state.loggedIn = true;
    },
    userLogOut: (state) => {
      state.loggedIn = false;
    },
    setFailedState: (state, action: PayloadAction<SetFailed>) => {
      state.failedState = action.payload.failed;
    },
  },
});

export const { userLogIn, userLogOut, setFailedState } = loginSlice.actions;

export default loginSlice.reducer;
