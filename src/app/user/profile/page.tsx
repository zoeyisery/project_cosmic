"use client";
import React from "react";
import { userController } from "@/controllers/userController";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import styles from "./profile.module.css";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import Posts from "./components/Posts/Posts";

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
      <Posts />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
