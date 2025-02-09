"use client";
import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { signin, signout } from "@/store/slices/userSlice";
import { verifyToken } from "@/utils/authUtil";

const AppInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      const parseUserData = JSON.parse(userData);
      const isValid = verifyToken(token);
      console.log("isValid:", isValid);

      if (isValid) {
        dispatch(
          signin({
            token,
            uid: parseUserData.uid,
            email: parseUserData.email,
          })
        );
      } else {
        dispatch(signout());
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    }
  }, []);

  return null;
};

export default AppInitializer;
