import React from "react";
import SectionIntro from "@/components/common/SectionIntro";
import BentoDemo from "@/components/ui/bento-grid/BentoGrid";
import GlowingCardWithBackground from "@/components/nurui/glowing-card";

const FeaturesSection = () => {
  return (
    <section className="pb-12">
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
    name: "Phát hiện Deepfake",
    description: "Phát hiện các video và ảnh Deepfake bằng công nghệ AI tiên tiến.",
    href: "/",
    className: "col-span-full xl:col-span-2",
    background: (
      <GlowingCardWithBackground 
        className="absolute -top-0 xl:-top-6 h-auto w-full transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
        backgroundImage="/deepfake.png" />
    ),
  },
  {
    name: "Chống giả mạo khuôn mặt",
    description: "Bảo vệ hệ thống của bạn khỏi các cuộc tấn công giả mạo khuôn mặt.",
    href: "/",
    className: "col-span-full xl:col-span-2",
    background: (
      <GlowingCardWithBackground 
        className="absolute -top-0 xl:-top-6 h-auto w-full transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
        backgroundImage="/facespoof.png" />
    ),
  },
];