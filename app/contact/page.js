import ContactData from "../_components/ContactDataa";
import HeroSection from "../_components/HeroSection";
import MapWrapper from "../_ui/MapWrapper"; // Import the wrapper instead

function page() {
  return (
    <>
      <HeroSection
        src="/bg-contact.mp4"
        headerText="Contact Us"
        text="Our admin team can help you with appointments..."
        buttonDisplay={false}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-8 p-3 md:grid-cols-2">
          <div className="w-full rounded-3xl bg-gray-50 p-3 ">
            <h1 className="text-primary mt-3 text-center text-2xl font-bold">
              GET IN TOUCH WITH US
            </h1>
            <div className="px-4 py-15">
              <ContactData />
            </div>
          </div>
          <div className="z-1">
            {/* No more error! The wrapper handles the client-only logic */}
            <MapWrapper />
          </div>
        </div>
      </main>
    </>
  );
}

export default page;