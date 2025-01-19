import React from "react";
import "@fontsource/material-icons";
import { Icon } from "@/components/Icon/Icon";
import styles from "./AuthBanner.module.css";

const AuthBanner = () => {
  return (
    <button className={styles.banner}>
      <div>
        <h4>코스믹 로그인 및 회원 가입</h4>
        <p>무한한 코스믹의 세계를 경험하세요.</p>
      </div>
      <div>
        <Icon name="chevron_right"></Icon>
      </div>
    </button>
  );
};

export default AuthBanner;
