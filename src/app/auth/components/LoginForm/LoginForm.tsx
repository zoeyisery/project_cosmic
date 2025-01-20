import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  return (
    <div className={styles.loginFormContainer}>
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
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
