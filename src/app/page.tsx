import AllComponentSection from "@/components/pages/Home/AllComponentSection";
import ComponentDemosSection from "@/components/pages/Home/ComponentDemosSection";
import HeroSection from "@/components/pages/Home/HeroSection";

const Home = () => {
  return (
    <main className="section-gap">
      <HeroSection />
      <AllComponentSection />
      <ComponentDemosSection />
    </main>
  );
};

export default Home;
