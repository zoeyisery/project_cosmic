import React from "react";
import "@fontsource/material-icons";
import { Icon } from "@/components/Icon/Icon";
import styles from "./AuthBanner.module.css";

interface AuthBannerProps {
  onClick: () => void;
}

const AuthBanner: React.FC<AuthBannerProps> = ({ onClick }) => {
  return (
    <div className={styles.banner} onClick={onClick}>
      <div>
        <h4>코스믹 로그인 및 회원 가입</h4>
        <p>무한한 코스믹의 세계를 경험하세요.</p>
      </div>
      <div>
        <Icon name="chevron_right"></Icon>
      </div>
    </div>
  );
};

export default AuthBanner;
