import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TrustSection } from "@/components/home/TrustSection";
import { useAnalysis } from "@/hooks/useAnalysis";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const { analyzeUrl, isLoading, result, error } = useAnalysis();

  const handleScan = (url: string) => {
    // Store URL in sessionStorage and navigate to results
    sessionStorage.setItem("scanUrl", url);
    navigate("/results");
  };

  return (
    <Layout>
      <HeroSection onScan={handleScan} isLoading={isLoading} />
      <HowItWorksSection />
      <TrustSection />
    </Layout>
  );
};

export default Index;
