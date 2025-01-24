import {
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
} from "@/services/firebaseService";
import { login, logout } from "../slices/userSlice";
import { AppDispatch } from "../store";

export const handleSignUp =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const user = await signUpWithEmail(email, password);

      if (user.email !== null) {
        dispatch(login({ uid: user.uid, email: user.email }));
      } else {
        console.log("이메일이 null 입니다.");
      }
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

export const handleSignIn =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const user = await signInWithEmail(email, password);
      if (user.email !== null) {
        dispatch(login({ uid: user.uid, email: user.email }));
      } else {
        console.error("이메일이 null입니다.");
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

export const handleSignOut = () => async (dispatch: AppDispatch) => {
  try {
    await signOutUser();
    dispatch(logout());
  } catch (error) {
    console.error("로그아웃 실패", error);
  }
};
