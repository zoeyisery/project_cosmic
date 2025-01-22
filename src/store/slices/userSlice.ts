import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userData: {
    uid: string | null;
    email: string | null;
  } | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ uid: string; email: string }>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
