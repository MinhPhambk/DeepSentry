import React from "react";
import OpenInV0Button from "./OpenInV0Button";
import FullScreenPreview from "./FullScreenPreview";

const Preview = ({
  component,
  v0ComponentName,
  previewComponentName,
}: {
  component: React.ReactNode;
  v0ComponentName?: string;
  previewComponentName?: string;
}) => {
  return (
    <div className="border border-[var(--primary-color)] dark:border-[var(--primary-color-3)] rounded-2xl min-h-[30rem] py3.5 flex items-center justify-center relative">
      <FullScreenPreview
        className="absolute right-[101px] top-2"
        previewComponentName={previewComponentName}
      />
      <OpenInV0Button
        className="absolute right-2 top-2"
        v0ComponentName={v0ComponentName}
      />
      {component}
    </div>
  );
};

export default Preview;
