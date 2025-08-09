"use client";
import React from "react";
import SplashCursor from "@/components/nurui/splash-cursor";
import { usePathname } from "next/navigation";

const SplashCursorDemo = () => {
  const pathName = usePathname();
  if (pathName.includes("docs") || pathName.includes("preview")) return null;
  return <SplashCursor />;
};

export default SplashCursorDemo;
