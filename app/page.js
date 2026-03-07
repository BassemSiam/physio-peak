import HeroSection from "./_components/HeroSection";
import WhyPhysioPeak from "./_pages/WhyPhysioPeak";
import VideoPhysioPeak from "./_pages/VideoPhysioPeak";
import ServicesSection from "./_pages/ServicesSection";
import CoverageSection from "./_pages/CoverageSection";
import Testimonials from "./_pages/aboutSections/Testimonials";
import FeaturedTestimonials from "./_pages/FeaturedTestimonials";
import FeaturedServices from "./_pages/FeaturedServices";

export default function Page() {
  return (
    <div>
      <HeroSection
        src="/bg-video-1.mp4"
        headerText="Physio Peak"
        text="Your recovery is our priority
        OurMission To empower individuals with effective
        physiotherapy solutions that improve their quality of life"
        buttonDisplay={true}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 md:px-10 md:py-20">
        <WhyPhysioPeak />
        <VideoPhysioPeak />
        <FeaturedServices />
        <CoverageSection />
        <FeaturedTestimonials/>
      </main>
    </div>
  );
}
