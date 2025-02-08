import {
  signUpUser,
  signInUser,
  signOutUser,
} from "@/firebase/firebaseService";
import { login, logout } from "../slices/userSlice";
import { AppDispatch } from "../store";

export const handleSignUp =
  (email: string, password: string, name: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const { uid, email: userEmail } = await signUpUser(name, email, password);

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const { token } = await response.json();
        if (userEmail) {
          dispatch(login({ uid, email: userEmail, token }));
        } else {
          console.error("이메일 정보가 없습니다.");
        }
      } else {
        console.error("이메일 정보가 없습니다.");
      }
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

export const handleSignIn =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const { uid, email: userEmail } = await signInUser(email, password);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status);

      // 응답 데이터 확인
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        const { token } = await response.json();
        if (userEmail) {
          dispatch(login({ uid, email: userEmail, token }));
        }
        console.error("이메일 정보가 없습니다.");
      } else {
        console.error("이메일 정보가 없습니다.");
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
