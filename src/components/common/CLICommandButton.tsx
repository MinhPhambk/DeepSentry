import React from "react";
import { Button } from "../ui/button";
import { FaTerminal } from "react-icons/fa";
import { cn } from "@/lib/utils";
import IClassName from "@/types/types";

const CLICommandButton = ({ className }: IClassName) => {
  return (
    <Button
      aria-label="CLI"
      className={cn(
        "bg-white/10 backdrop-blur-sm border border-[rgba(255,255,255,.1)] px-3 rounded-lg uppercase flex items-center gap-2",
        className,
      )}
    >
      <FaTerminal />
      CLI
    </Button>
  );
};

export default CLICommandButton;
