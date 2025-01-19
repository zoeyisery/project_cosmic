import React from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";
import { Icon } from "../Icon/Icon";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navLinks}>
        <Link href="/">
          <Icon name="home" />
        </Link>
        <Link href="/search">
          <Icon name="search" />
        </Link>
        <Link href="/post">
          <Icon name="edit_square" />
        </Link>
        <Link href="/alert">
          <Icon name="notifications" />
        </Link>
        <Link href="/user">
          <Icon name="account_circle" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
