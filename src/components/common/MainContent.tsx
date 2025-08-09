"use client";
import { usePathname } from "next/navigation";
import React from "react";
const MainContent = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <main
      className={
        pathName.includes("docs") || pathName.includes("preview")
          ? ""
          : "pb-12 lg:pb-16 xl:pb-20 2xl:pb-24"
      }
    >
      {children}
    </main>
  );
};

export default MainContent;
