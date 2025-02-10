"use client";
import React, { useEffect, useState } from "react";
import AuthPage from "@/app/auth/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userController } from "@/controllers/userController";
import { Icon } from "@/components/common/Icon/Icon";
import { useAppDispatch } from "@/hooks/useAppDispatch";
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
            <Icon name="close" size="25px" />
          </Link>
        </div>
        <div className={styles.loginPageBody}>
          <div className={styles.logo}>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Email"
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
                  placeholder="Password"
                  className={styles.inputField}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.loginButton} type="submit">
                  Login
                </button>
              </div>
              <div className={styles.textGroup}>
                <p>
                  코스믹이 처음이세요?{" "}
                  <Link href="/auth/signup" className={styles.signupLink}>
                    회원가입
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthPage>
  );
};

export default SigninPage;
