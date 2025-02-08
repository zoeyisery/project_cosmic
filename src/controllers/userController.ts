import {
  handleSignUp,
  handleSignIn,
  handleSignOut,
} from "@/store/actions/userAction";
import { AppDispatch } from "@/store/store";

export const userController = () => {
  const signUp =
    (name: string, email: string, password: string) =>
    async (dispatch: AppDispatch) => {
      await dispatch(handleSignUp(name, email, password));
    };

  const signIn =
    (email: string, password: string) => async (dispatch: AppDispatch) => {
      await dispatch(handleSignIn(email, password));
    };

  const signOut = () => async (dispatch: AppDispatch) => {
    await dispatch(handleSignOut());
  };

  return { signUp, signIn, signOut };
};
