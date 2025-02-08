import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  currentStep: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: SignupState = {
  currentStep: 1,
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const { setStep, setName, setEmail, setPassword, setConfirmPassword } =
  signupSlice.actions;
export default signupSlice.reducer;
