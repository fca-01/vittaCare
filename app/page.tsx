
import HeroSection from "@/components/sections/hero-section";
import PlansSection from "@/components/sections/plans-section";
import QuestionsSection from "@/components/sections/questions-section";
import ReviewSection from "@/components/sections/review-section";
import ServicesSection from "@/components/sections/services-section";
import StatisticsSection from "@/components/sections/statistics-section";




export default function Home() {
  return (
    <div className="mb-0 gap-10">
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <ReviewSection />
      <PlansSection />
      <QuestionsSection />
    </div>
  );
}
