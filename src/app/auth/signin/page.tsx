"use client";
import React, { useEffect, useState } from "react";
import AuthPage from "@/app/auth/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { userController } from "@/controllers/userController";
import { Icon } from "@/components/Icon/Icon";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useRedirect } from "@/hooks/useRedirect";

import styles from "./signin.module.css";

const SigninPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = userController();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(handleSignIn.signIn(email, password));
    router.push("/user/profile");
  };

  /*const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    useRedirect(isLoggedIn, router);
  }, [isLoggedIn, router]);*/

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
          <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  className={styles.inputField}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  className={styles.inputField}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.loginButton} type="submit">
                  Log In
                </button>
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

export default SigninPage;
