import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import ExchangesSection from "../components/ExchangesSection";
import BenefitsSection from "../components/BenefitsSection";
import ReasonSection from "../components/ReasonSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import PartnerMarquee from "../components/PartnerMarquee";
import DiscordSection from "../components/DiscordSection";

export default function HomePage({ onOpenGuide }) {
  return (
    <>
      <HeroSection onOpenGuide={onOpenGuide} />
      <PartnerMarquee />
      <FeaturesSection />
      <BenefitsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      {/* Retained original sections below or interspersed to preserve content */}
      <ExchangesSection />
      <ReasonSection />
      <DiscordSection />
    </>
  );
}
