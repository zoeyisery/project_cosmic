import React from "react";
import styles from "./auth.module.css";

const AuthPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.authPageOverlay}>
      <div className={styles.authPageContainer}>{children}</div>
    </div>
  );
};

export default AuthPage;
