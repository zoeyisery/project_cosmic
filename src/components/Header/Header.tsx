import React, { useState } from "react";
import "@fontsource/material-icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.logo}>cosmic</h1>
          <div className={styles.buttonContainer}>
            <span className="material-symbols-outlined">filter_list</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
