import React from "react";
import styles from "./StepsTracker.module.css";

const StepsTracker = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className={styles.stepsTracker}>
      <div className={currentStep >= 1 ? "active" : ""}>1</div>
      <div className={currentStep >= 2 ? "active" : ""}>2</div>
      <div className={currentStep >= 3 ? "active" : ""}>3</div>
    </div>
  );
};

export default StepsTracker;
