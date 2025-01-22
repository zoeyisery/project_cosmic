"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useHeaderState = () => {
  const [headerTitle, setHeaderTitle] = useState("COSMIC");
  const [iconName, setIconName] = useState("filter_list");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/user")) {
      setHeaderTitle("MY");
      setIconName("settings");
    } else {
      setHeaderTitle("COSMIC");
      setIconName("filter_list");
    }
  }, [pathname]);

  return { headerTitle, iconName };
};
