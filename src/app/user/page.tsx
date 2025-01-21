"use client";

import React, { useEffect } from "react";
import AuthBanner from "./components/AuthBanner/AuthBanner";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import styles from "./user.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { loginRedirect } from "@/store/actions/userAction";

const UserPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    loginRedirect(isLoggedIn, router);
  }, [isLoggedIn, router]);

  return (
    <div className={styles.userPageContainer}>
      {!isLoggedIn && <AuthBanner />}
      {!isLoggedIn && <PromoBanner />}
      {children}
    </div>
  );
};

export default UserPage;
