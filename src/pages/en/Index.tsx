import Layout from "@/components/Layout";
import BenefitsSection from "./components/BenefitsSection";
import FaqSection from "./components/FaqSection";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <FaqSection />
    </Layout>
  );
};

export default Index;
