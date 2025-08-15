import React from "react";
import FullScreenPreviewCustom from "./FullScreenPreviewCustom";

const Preview = ({
  component,
  linkdemo,
}: {
  component: React.ReactNode;
  linkdemo?: string;
}) => {
  return (
    <div className="border border-[var(--primary-color)] dark:border-[var(--primary-color-3)] rounded-2xl min-h-[30rem] py3.5 flex items-center justify-center relative">
      <FullScreenPreviewCustom
        className="absolute right-[101px] top-2"
        linkdemo={linkdemo}
      />
      {component}
    </div>
  );
};

export default Preview;
