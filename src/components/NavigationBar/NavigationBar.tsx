import React from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navLinks}>
        <Link href="/">
          <h3>home</h3>
        </Link>
        <Link href="/search">
          <h3>search</h3>
        </Link>
        <Link href="/post">
          <h3>post</h3>
        </Link>
        <Link href="/alert">
          <h3>alert</h3>
        </Link>
        <Link href="/auth">
          <h3>login</h3>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
