"use client";
import { Fullscreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { siteLink } from "@/config/site";
import { cn } from "@/lib/utils";
import IClassName from "@/types/types";

const FullScreenPreviewCustom = ({
  className,
  linkdemo,
}: IClassName & { linkdemo?: string }) => {
  const url = `${siteLink}/preview/${linkdemo}`;
  return (
    <Button
      aria-label="Xem trước bản demo"
      asChild
      className={cn(
        "z-50 text-[var(--primary-colo)] bg-[var(--primary-color)] rounded-lg shadow-none px-2.5",
        className,
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cn("group/fullscreen transition-all duration-200")}
      >
        <Fullscreen
          className={cn(
            "h-4 w-4",
            "transition-transform duration-200 group-hover/fullscreen:rotate-45",
          )}
        />
      </a>
    </Button>
  );
};

export default FullScreenPreviewCustom;
