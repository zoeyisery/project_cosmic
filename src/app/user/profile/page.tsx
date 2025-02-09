"use client";
import React from "react";
import { useSelector } from "react-redux";
import { userController } from "@/controllers/userController";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import styles from "./profile.module.css";
import InfoBanner from "./components/InfoBanner/InfoBanner";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignOut = userController();

  const handleLogout = () => {
    dispatch(handleSignOut.signOut());
    router.push("/user");
  };

  return (
    <div className={styles.profilePageContainer}>
      <InfoBanner />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
