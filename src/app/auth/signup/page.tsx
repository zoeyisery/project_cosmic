"use client";

import React from "react";
import AuthPage from "@/app/auth/page";
import StepsTracker from "./components/StepsTracker/StepsTracker";
import { useStep } from "@/hooks/helpers/useStep";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import styles from "./signup.module.css";

const SignupPage: React.FC = () => {
  const { currentStep, nextStep, prevStep } = useStep(1, 3); // 스탭 관련 로직을 훅으로 분리

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
                <button className={styles.nextButton}>다음</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthPage>
  );
};

export default SignupPage;
