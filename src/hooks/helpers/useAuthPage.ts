"use client";
import { useState } from "react";

export const useAuthPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePage = () => {
    setIsVisible((prev) => !prev);
  };

  return { isVisible, togglePage };
};
