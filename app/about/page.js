import HeroSection from "../_components/HeroSection";
import FoundersSection from "../_pages/aboutSections/FoundersSection";
import OurWorkMasonry from "../_pages/aboutSections/OurWorkMasonry";
import VideoPhysioPeak from "../_pages/VideoPhysioPeak";

function page() {
  return (
    <>
      <HeroSection
        src="/bg-about.mp4"
        headerText="About"
        text="We are dedicated to helping you recover from injuries, manage chronic pain,and achieve your personal health goals Our licensed physiotherapists ensure that you receive the most effective treatment for your unique needs"
        buttonDisplay={true}
      />
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-10 md:py-10">
        <FoundersSection />
        <VideoPhysioPeak />
        <OurWorkMasonry />
      </main>
    </>
  );
}

export default page;
