import NewsLetterSection from "@/components/common/NewsLetterSection";
import AboutUsHeroSection from "@/components/pages/about-us/AboutUsHeroSection";
import FaqSection from "@/components/pages/about-us/FaqSection";
import ImageTabsSection from "@/components/pages/about-us/ImageTabsSection";
import StackingCardsSection from "@/components/pages/about-us/StackingCardsSection";
import StatesCountupSection from "@/components/pages/about-us/StatesCountupSection";
import { WorldMapAnimationSection } from "@/components/pages/about-us/WorldMapAnimationSection";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about the Nurui, our mission, and how we build the future of UI components.",
};

const page = () => {
  return (
    <main className="section-gap">
      <AboutUsHeroSection />
      <ImageTabsSection />
      <StatesCountupSection />
      <WorldMapAnimationSection />
      <StackingCardsSection />
      <FaqSection />
      <NewsLetterSection />
    </main>
  );
};

export default page;
