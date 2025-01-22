"use client";

import React from "react";
import { useHeaderState } from "@/hooks/useHeaderState";
import styles from "./Header.module.css";
import "@fontsource/material-icons";
import { Icon } from "../Icon/Icon";

const HeaderContents: React.FC = () => {
  const { headerTitle, iconName } = useHeaderState();

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.logo}>{headerTitle}</h1>
      <div className={styles.buttonContainer}>
        <Icon name={iconName}></Icon>
      </div>
    </div>
  );
};

export default HeaderContents;
