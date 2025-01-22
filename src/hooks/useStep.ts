"use client";

import { useSearchParams } from "next/navigation";

export const useStep = (initialStep: number, maxStep: number) => {
  const searchParams = useSearchParams();
  const currentStep = Number(searchParams.get("step")) || initialStep;

  const nextStep = () => {
    const newStep = currentStep + 1;
    if (newStep <= maxStep) {
      window.location.search = `?step=${newStep}`;
    }
  };

  const prevStep = () => {
    const newStep = currentStep - 1;
    if (newStep >= 1) {
      window.location.search = `?step=${newStep}`;
    }
  };

  return {
    currentStep,
    nextStep,
    prevStep,
  };
};

export default useStep;
