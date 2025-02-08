"use client";

import React, { useEffect } from "react";
import AuthBanner from "./components/AuthBanner/AuthBanner";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import Banner from "@/components/Banner/Banner";
import styles from "./user.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { useRedirect } from "@/hooks/useRedirect";

const UserPage: React.FC = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    useRedirect(isLoggedIn, router);
  }, [isLoggedIn, router]);

  return (
    <div className={styles.userPageContainer}>
      {!isLoggedIn && <AuthBanner />}
      {!isLoggedIn && <Banner />}
    </div>
  );
};

export default UserPage;
