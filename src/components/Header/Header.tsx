import React from "react";
import styles from "./Header.module.css";
import HeaderContents from "./HeaderContents";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <HeaderContents />
      </header>
    </>
  );
};

export default Header;
