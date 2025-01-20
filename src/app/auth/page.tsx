import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import styles from "./auth.module.css";
import { Icon } from "@/components/Icon/Icon";

const AuthPage: React.FC = () => {
  return (
    <div className={styles.authPageOverlay}>
      <div className={styles.authPageContainer}>
        <div className={styles.authPageHeader}>
          <Icon name="close"></Icon>
        </div>
        <div className={styles.authPageBody}>
          <h1 className={styles.logo}>cosmic</h1>
          <LoginForm />
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
