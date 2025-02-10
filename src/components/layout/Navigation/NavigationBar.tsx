import React from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";
import { Icon } from "@/components/common/Icon/Icon";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navLinks}>
        <Link href="/">
          <Icon name="home" color="white" size="30px" />
        </Link>
        <Link href="/search">
          <Icon name="search" color="white" size="30px" />
        </Link>
        <Link href="/post">
          <Icon name="edit_square" color="white" size="30px" />
        </Link>
        <Link href="/alert">
          <Icon name="notifications" color="white" size="30px" />
        </Link>
        <Link href="/user">
          <Icon name="account_circle" color="white" size="30px" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
