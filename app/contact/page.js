import HeroSection from "../_components/HeroSection";
import SocialMedia from "../_components/SocialMedia";
import ContactData from "../_components/ContactDataa";
import { informationData } from "../_data/servicesData";
import MapWrapper from "../_ui/MapWrapper";
import { Mail } from "lucide-react";

function ContactPage() {
  return (
    <>
      <HeroSection
        src="/bg-contact.mp4"
        headerText="Contact Us"
        text="Our admin team can help you with appointments, class bookings and ensuring you are seeing the most appropriate physio for your injury or area of concern."
        buttonDisplay={false}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-24">
        {/* Header Section */}
        <div className="mb-16 text-center md:mb-24">
          <h1 className="from-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent uppercase md:text-5xl">
            Get In Touch
          </h1>
          <div className="bg-primary mx-auto mt-6 h-1.5 w-24 rounded-full" />
        </div>

        {/* Location Grid - Alternating Layout */}
        <div className="space-y-20 md:space-y-32">
          {informationData.map((data, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={data.address}
                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
              >
                {/* Text Content - Swaps order based on index */}
                <div
                  className={`flex flex-col space-y-6 ${isEven ? "md:order-1" : "md:order-2"}`}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                >
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                      {data.place}
                    </h2>
                  </div>

                  <div className="transition-hover rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm hover:shadow-md">
                    <ContactData data={data} />
                  </div>
                </div>

                {/* Map Component */}
                <div
                  className={`relative h-100 w-full overflow-hidden rounded-3xl shadow-xl ${isEven ? "md:order-2" : "md:order-1"}`}
                  data-aos="zoom-in"
                >
                  <MapWrapper data={data} />
                </div>
              </div>
            );
          })}
        </div>

        {/* General Support Section */}
        <section className="relative mt-32 overflow-hidden rounded-[3rem] bg-gray-900 p-10 text-center text-white md:p-20">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mb-6 text-3xl font-bold italic md:text-4xl">
              Still have questions?
            </h2>
            <p className="mb-10 max-w-lg text-gray-400">
              For general inquiries, corporate partnerships, or health provider
              referrals, please email our central administration.
            </p>

            <a
              href="mailto:info@physiopeak.com.au"
              className="group bg-primary hover:text-primary flex items-center gap-4 rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:bg-white"
            >
              <Mail className="shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              info@physiopeak.com.au
            </a>

            {/* <div className="mt-12 flex flex-col items-center">
              <span className="mb-4 text-sm tracking-[0.3em] text-gray-500 uppercase">
                Follow Our Community
              </span>
              <SocialMedia />
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
