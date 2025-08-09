import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Preview from "./Preview";
import ComponentPreviewIntro from "./ComponentPreviewIntro";
import { CodeBlock } from "../ui/code-block/CodeBlock";
import { Index } from "@/registry/components-registry";

interface ComponentPreviewProps {
  componentName: keyof typeof Index;
  introName?: boolean;
  exampleName?: string;
  v0ComponentName?: string;
  previewComponentName?: string;
}

const ComponentPreview = ({
  componentName,
  introName = true,
  exampleName,
  v0ComponentName,
  previewComponentName,
}: ComponentPreviewProps) => {
  const DemoComponent = Index[componentName]?.preview;
  const sourceCode = Index[componentName]?.code ?? "";

  if (!DemoComponent) {
    return (
      <p className="text-sm text-red-500">
        Component {componentName} not found in registry.
      </p>
    );
  }

  const tabs = [
    {
      id: "Preview",
      icon: <IoEyeOutline />,
      label: "Preview",
      content: (
        <Preview
          component={DemoComponent}
          v0ComponentName={v0ComponentName}
          previewComponentName={previewComponentName}
        />
      ),
    },
    {
      id: "Code",
      icon: <FaCode />,
      label: "Code",
      content: <CodeBlock code={sourceCode} />,
    },
  ];
  return (
    <div>
      {introName ? (
        <ComponentPreviewIntro />
      ) : (
        exampleName && (
          <h3 className="text-2xl font-bold pb-3 pt-4 capitalize">
            {exampleName}
          </h3>
        )
      )}
      <AnimatedTabs tabs={tabs} />
    </div>
  );
};

export default ComponentPreview;
