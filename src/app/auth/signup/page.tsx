"use client";

import React from "react";
import AuthPage from "@/app/auth/page";
import StepsTracker from "./components/StepsTracker/StepsTracker";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { userController } from "@/controllers/userController";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Icon } from "@/components/common/Icon/Icon";
import styles from "./signup.module.css";
import NameField from "./components/NameField/NameField";
import CredentialsField from "./components/CredentialsField/CredentialsField";
import { useRouter } from "next/navigation";

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const name = useSelector((state: RootState) => state.signup.name);
  const email = useSelector((state: RootState) => state.signup.email);
  const password = useSelector((state: RootState) => state.signup.password);
  const confirmPassword = useSelector(
    (state: RootState) => state.signup.confirmPassword
  );
  const currentStep = useSelector(
    (state: RootState) => state.signup.currentStep
  );

  const handleSignUp = userController();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit:", name, email, password);
    dispatch(handleSignUp.signUp(email, password, name));
    router.push("/user/profile");
  };

  const isConfirmValid =
    confirmPassword.length >= 6 && password === confirmPassword;

  return (
    <AuthPage>
      <div className={styles.signupPageContainer}>
        <div className={styles.signupPageHeader}>
          <Link href="/user">
            <Icon name="chevron_left" size="35px" />
          </Link>
        </div>
        <div className={styles.signupPageBody}>
          <div className={styles.logo}>
            <h2>Register</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <NameField />
            {(currentStep === 2 || currentStep == 3) && <CredentialsField />}
            {currentStep === 3 && isConfirmValid && (
              <div className={styles.buttonGroup}>
                <button className={styles.signupButton} type="submit">
                  Sign Up
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </AuthPage>
  );
};

export default SignupPage;
