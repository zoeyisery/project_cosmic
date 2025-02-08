import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userData: {
    uid: string | null;
    email: string | null;
  } | null;
  token: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ uid: string; email: string; token: string }>
    ) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
