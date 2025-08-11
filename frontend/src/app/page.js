"use client";

import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/HeroSection";
import ValueProposition from "@/components/landing-page/ValueProposition";
import FeatureComparison from "@/components/landing-page/FeatureComparison";
import ProcessSection from "@/components/landing-page/ProcessSection";
import SampleBlueprint from "@/components/landing-page/SampleBlueprint";
import TargetAudience from "@/components/landing-page/TargetAudience";
import FinalCTA from "@/components/landing-page/FinalCTA";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ValueProposition />
      <FeatureComparison />
      <ProcessSection />
      <SampleBlueprint />
      <TargetAudience />
      <FinalCTA />
      <Footer />
    </div>
  );
}
