import React from "react";
import dynamic from "next/dynamic";

export const componentsPreviewRegistry: Record<
  string,
  { component: React.ComponentType }
> = {
  "deepfake": {
    component: dynamic(() => import("@/components/deepfake/page")),
  },
  "deepfas": {
    component: dynamic(() => import("@/components/deepfas/page")),
  },
};