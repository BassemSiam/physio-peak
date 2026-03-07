import HeroSection from "../_components/HeroSection";
import AboutDrMohamed from "../_pages/aboutSections/AboutDrMohamed";
import OurWorkMasonry from "../_pages/aboutSections/OurWorkMasonry";
import Testimonials from "../_pages/aboutSections/Testimonials";
import ServicesSection from "../_pages/ServicesSection";

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
        <AboutDrMohamed />
        <ServicesSection/>
        <OurWorkMasonry />
        <Testimonials />
      </main>
    </>
  );
}

export default page;
