import React from "react";
import AuthBanner from "./components/AuthBanner/AuthBanner";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import styles from "./user.module.css";

const UserPage = () => {
  return (
    <div className={styles.userPageContainer}>
      <AuthBanner />
      <PromoBanner />
    </div>
  );
};

export default UserPage;
