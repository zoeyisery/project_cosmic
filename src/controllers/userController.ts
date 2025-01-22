import {
  handleSignUp,
  handleSignIn,
  handleSignOut,
} from "@/store/actions/userAction";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

export const userController = () => {
  const dispatch = useDispatch();

  const signUp =
    (email: string, password: string) => async (dispatch: AppDispatch) => {
      await dispatch(handleSignUp(email, password));
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
