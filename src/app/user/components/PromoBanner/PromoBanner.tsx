import React from "react";
import styles from "./PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h3>쫀광 화잘먹템 광채 미스트&크림</h3>
        <p>구매시 마스크팩 증정!</p>
      </div>
      <div>
        <img src="image" />
      </div>
    </div>
  );
};

export default PromoBanner;
