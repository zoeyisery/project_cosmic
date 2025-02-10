import React from "react";
import "@fontsource/material-icons";
import Link from "next/link";
import { Icon } from "@/components/common/Icon/Icon";
import styles from "./AuthBanner.module.css";

const AuthBanner: React.FC = () => {
  return (
    <Link href="/auth/signin" legacyBehavior>
      <div className={styles.banner}>
        <div className={styles.textPart}>
          <h4>코스믹 로그인 및 회원 가입</h4>
          <p>무한한 코스믹의 세계를 경험하세요.</p>
        </div>
        <div className={styles.iconPart}>
          <Icon name="chevron_right" size="20px" />
        </div>
      </div>
    </Link>
  );
};

export default AuthBanner;
