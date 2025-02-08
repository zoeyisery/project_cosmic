import React, { useEffect, useState } from "react";
import FieldHelper from "../FieldHelper/FieldHelper";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { RootState } from "@/store/store";
import { setStep, setName } from "@/store/slices/signupSlice";
import styles from "./NameField.module.css";

const NameField: React.FC = () => {
  const name = useSelector((state: RootState) => state.signup.name);
  const dispatch = useAppDispatch();

  const [localName, setLocalName] = useState(name);

  useEffect(() => {
    if (name.length >= 2) {
      setTimeout(() => dispatch(setStep(2)), 500);
    }
  }, [name, dispatch]);

  return (
    <div>
      <h3>이름을 입력해주세요</h3>
      <div className={styles.nameFieldContainer}>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className={styles.nameField}
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          onBlur={(e) => dispatch(setName(localName))}
          required
        />
        <FieldHelper
          isValid={name.length >= 2}
          field="name"
          errorType="minLength"
        />
      </div>
    </div>
  );
};

export default NameField;
