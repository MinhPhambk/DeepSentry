import React from "react";
import SectionIntro from "@/components/common/SectionIntro";
import BentoDemo from "@/components/ui/bento-grid/BentoGrid";
import { AnimatedListDemo } from "@/components/ui/animated-list/AnimatedList";
import { AnimatedCircularProgressBarDemo } from "@/components/ui/progress-bar/AnimatedCircularProgressBarDemo";
import { TerminalDemo } from "@/components/ui/terminal/TerminalDemo";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/nurui/marque";
import { GradientGridHero } from "@/components/nurui/gradient-grid-hero";
import GlowingCard from "@/components/nurui/glowing-card";
import ShinyCardDemo from "@/components/nurui/shiny-card-demo";
import { FollowingEye } from "@/components/nurui/following-eye";

const FeaturesSection = () => {
  return (
    <section>
      <SectionIntro
        title={{
          fullHighLightColor: "text-[var(--secondary-color)]",
          normalWords: "",
          highLiteWords: "Các Tính Năng Chính",
        }}
        description="Khám phá các tính năng sẵn sàng sử dụng từ DeepSentry để 
        nâng cao bảo mật cho hệ thống của bạn trong việc phát hiện Deepfake và giả mạo khuôn mặt."
      />
      <div className="space-y-12">
        <BentoDemo features={featuresDataOne} />
      </div>
    </section>
  );
};

export default FeaturesSection;

const featuresDataOne = [
  {
    name: "Glowing Card",
    description: "Interactive glowing UI card",
    href: "/docs/glowing-card",
    className: "col-span-full xl:col-span-2",
    background: (
      <GlowingCard className="absolute left-1/2 -translate-x-1/2 -top-6 h-[400px] w-full scale-75 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    name: "Glowing Card",
    description: "Interactive glowing UI card",
    href: "/docs/glowing-card",
    className: "col-span-full xl:col-span-2",
    background: (
      <GlowingCard className="absolute left-1/2 -translate-x-1/2 -top-6 h-[400px] w-full scale-75 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
];