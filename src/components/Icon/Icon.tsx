import type { FC } from "react";
import styles from "./Icon.module.css"; // 모듈 CSS 파일을 import

export type IconProps = {
  name: string;
  size?: string;
  color?: string;
};

export const Icon: FC<IconProps> = ({ name, size, color }) => {
  return (
    <span
      className={`${styles.icon} material-symbols-outlined`}
      style={{ fontSize: size, color: color }}
    >
      {name}
    </span>
  );
};
