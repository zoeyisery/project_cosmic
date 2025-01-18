import React, { useState } from "react";
import "@fontsource/material-icons";
import styles from "./Header.module.css";
import { Icon } from "../Icon/Icon";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.logo}>cosmic</h1>
          <div className={styles.buttonContainer}>
            <Icon name="filter_list"></Icon>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
