import React, { useEffect, useState } from "react";
import FieldHelper from "../FieldHelper/FieldHelper";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setStep,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "@/store/slices/signupSlice";
import styles from "./CredentialsField.module.css";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const CredentialsField: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useSelector((state: RootState) => state.signup.name);
  const email = useSelector((state: RootState) => state.signup.email);
  const password = useSelector((state: RootState) => state.signup.password);
  const confirmPassword = useSelector(
    (state: RootState) => state.signup.confirmPassword
  );

  const [localEmail, setLocalEmail] = useState(email);
  const [localPassword, setLocalPassword] = useState(password);
  const [localConfirmPassword, setLocalConfirmPassword] =
    useState(confirmPassword);

  const currentStep = useSelector(
    (state: RootState) => state.signup.currentStep
  );

  useEffect(() => {
    console.log("currentStep", currentStep);
    console.log("email", email);
    if (currentStep === 2 && email.includes("@") && password.length >= 6) {
      setTimeout(() => dispatch(setStep(3)), 500);
    }
  }, [email, password, dispatch]);

  return (
    <div>
      <h3>이메일과 비밀번호를 입력해주세요</h3>
      <div>
        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={styles.credentialsField}
              value={localEmail}
              onChange={(e) => setLocalEmail(e.target.value)}
              onBlur={(e) => dispatch(setEmail(localEmail))}
              required
            />
          </div>
          <FieldHelper
            isValid={email.includes("@")}
            field="email"
            errorType="invalid"
          />
          <div className={styles.inputGroup}>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={styles.credentialsField}
              value={localPassword}
              onChange={(e) => setLocalPassword(e.target.value)}
              onBlur={(e) => dispatch(setPassword(localPassword))}
              required
            />
            <FieldHelper
              isValid={password.length >= 6}
              field="password"
              errorType="minLength"
            />
          </div>
          {currentStep === 3 && (
            <div className={styles.inputGroup}>
              <input
                id="confirmPassword"
                type="confirmPassword"
                placeholder="Enter your password"
                className={styles.credentialsField}
                value={localConfirmPassword}
                onChange={(e) => setLocalConfirmPassword(e.target.value)}
                onBlur={(e) =>
                  dispatch(setConfirmPassword(localConfirmPassword))
                }
                required
              />
              <FieldHelper
                isValid={password.length >= 6}
                field="confirmPassword"
                errorType="notMatch"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CredentialsField;
