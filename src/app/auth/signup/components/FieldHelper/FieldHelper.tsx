import React from "react";
import { FieldHelperMessage } from "./FieldHelperMessage";
import styles from "./FieldHelper.module.css";

interface FieldHelperProps {
  isValid: boolean;
  field: "name" | "email" | "password" | "confirmPassword";
  errorType: string | null; // 에러 유형 (required, minLength 등)
}

const FieldHelper: React.FC<FieldHelperProps> = ({
  isValid,
  field,
  errorType,
}) => {
  if (!errorType) return null; // 에러가 없으면 메시지를 표시하지 않음

  return (
    <p style={{ color: isValid ? "white" : "red", fontSize: "10px" }}>
      {FieldHelperMessage[field][errorType]}
    </p>
  );
};

export default FieldHelper;
