"use client";

import React, { useState } from "react";
import AuthPage from "@/app/auth/page";
import StepsTracker from "./components/StepsTracker/StepsTracker";
import { useStep } from "@/hooks/useStep";
import Link from "next/link";
import { userController } from "@/controllers/userController";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Icon } from "@/components/Icon/Icon";
import styles from "./signup.module.css";

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { currentStep, nextStep, prevStep } = useStep(1, 3);

  const handleSignUp = userController();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /*if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }*/

    dispatch(handleSignUp.signUp(email, password));
  };

  return (
    <AuthPage>
      <div className={styles.signupPageContainer}>
        <div className={styles.signupPageHeader}>
          <Link href="/user">
            <Icon name="chevron_left"></Icon>
          </Link>
        </div>
        <div className={styles.signupPageBody}>
          <StepsTracker currentStep={currentStep} />
          <h3>이메일과 비밀번호를 입력해주세요</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.inputGroup}>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={styles.inputField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className={styles.inputField}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.nextButton} type="submit">
                  다음
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthPage>
  );
};

export default SignupPage;
