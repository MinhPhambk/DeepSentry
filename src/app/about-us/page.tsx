import NewsLetterSection from "@/components/common/NewsLetterSection";
import AboutUsHeroSection from "@/components/pages/about-us/AboutUsHeroSection";
import FaqSection from "@/components/pages/about-us/FaqSection";
import ImageTabsSection from "@/components/pages/about-us/ImageTabsSection";
import StackingCardsSection from "@/components/pages/about-us/StackingCardsSection";

export const metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu về DeepSentry - Giải pháp bảo mật đa dạng và hiệu quả cho các ứng dụng web hiện đại. Tích hợp công nghệ tiên tiến để phát hiện và ngăn chặn các mối đe dọa an ninh mạng.",
};

const page = () => {
  return (
    <main className="section-gap">
      <AboutUsHeroSection />
      <ImageTabsSection />
      <StackingCardsSection />
      <FaqSection />
      <NewsLetterSection />
    </main>
  );
};

export default page;
