import React from "react";
import AuthPage from "@/app/auth/page";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import styles from "./login.module.css";

const LoginPage: React.FC = () => {
  return (
    <AuthPage>
      <div className={styles.loginPageContainer}>
        <div className={styles.loginPageHeader}>
          <Link href="/user">
            <Icon name="close"></Icon>
          </Link>
        </div>
        <div className={styles.loginPageBody}>
          <div className={styles.logo}>
            <h1>cosmic</h1>
          </div>
          <form>
            <div className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.loginButton}>Log In</button>
              </div>
              <div className={styles.buttonGroup}>
                <Link href="/auth/signup">
                  <button className={styles.signupButton}>Sign Up</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthPage>
  );
};

export default LoginPage;
