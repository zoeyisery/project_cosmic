"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "@/store/slices/userSlice";
import { verifyToken } from "@/utils/authUtil";

const AppInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const isValid = verifyToken(token);
      if (isValid) {
        dispatch(
          login({
            token,
            uid: "",
            email: "",
          })
        );
      } else {
        dispatch(logout());
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  return null;
};

export default AppInitializer;
