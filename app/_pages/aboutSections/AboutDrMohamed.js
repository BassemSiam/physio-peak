import { qualifications } from "@/app/_data/servicesData";
import Image from "next/image";

function AboutDrMohamed() {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-2xl md:grid md:grid-cols-[0.8fr_1.2fr]">
      <div
        data-aos="fade-right"
        className="group relative min-h-125 overflow-hidden"
      >
        <Image
          src="/avatars/robert.jpg"
          alt="Dr. Mohamed Mahdi"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Floating Badge */}
        <div className="animate-bounce-slow absolute right-6 bottom-6 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">
          <p className="text-primary text-2xl font-bold">12+</p>
          <p className="text-xs font-semibold tracking-tight text-gray-600 uppercase">
            Years Exp.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div data-aos="fade-left" className="flex flex-col justify-center bg-linear-to-br from-white to-gray-50 p-10 lg:p-16">
        <header className="mb-8">
          <span className="bg-primary mb-4 inline-block rounded-full px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
            Expert Practitioner
          </span>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
            Dr. Mohamed <span className="text-primary">Mahdi</span>
          </h1>
          <div className="bg-primary/20 mt-4 h-1.5 w-20 overflow-hidden rounded-full">
            <div className="bg-primary h-full w-1/2" />
          </div>
        </header>

        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          With over{" "}
          <span className="text-primary font-semibold">
            12 years of clinical expertise
          </span>
          , Dr. Mohamed Mahdi is dedicated to restoring functional movement and
          enhancing long-term quality of life. By blending{" "}
          <span className="italic">evidence-based manual therapy</span> with a
          patient-centered philosophy, he ensures every treatment plan is
          seamlessly integrated with your medical team to achieve sustainable
          recovery and peak physical performance.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {qualifications.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="bg-primary/10 text-primary rounded-lg p-2">
                {item.icon}
              </div>
              <span className="text-sm leading-tight font-bold text-gray-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        {/* 
        <button className="bg-primary hover:bg-primary/90 shadow-primary/20 mt-12 w-fit rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-all active:scale-95">
          Book a Consultation
        </button> */}
      </div>
    </section>
  );
}

export default AboutDrMohamed;
