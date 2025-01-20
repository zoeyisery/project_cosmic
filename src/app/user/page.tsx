"use client";

import React from "react";
import AuthBanner from "./components/AuthBanner/AuthBanner";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import AuthPage from "@/app/auth/page";
import { useAuthPage } from "@/hooks/helpers/useAuthPage";
import styles from "./user.module.css";

const UserPage = () => {
  const { isVisible, togglePage } = useAuthPage();

  return (
    <div>
      <div className={styles.userPageContainer}>
        <AuthBanner onClick={togglePage} />
        <PromoBanner />
      </div>
      <div>{isVisible && <AuthPage />}</div>
    </div>
  );
};

export default UserPage;
