import { workGallery } from "@/app/_data/servicesData";
import Image from "next/image";

function OurWorkMasonry() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Refined Minimalist Header */}
      <div className="mb-20 text-center">
        <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Our Work
        </h1>
        <div className="bg-primary mx-auto mt-4 h-1.5 w-20 rounded-full" />
      </div>

      {/* Advanced Masonry Grid */}
      <div className="columns-1 gap-6 space-y-8 sm:columns-2 lg:columns-3">
        {workGallery.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`group relative isolate break-inside-avoid overflow-hidden rounded-4xl bg-gray-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ${item.size}`}
          >
            {/* Image Layer */}
            <Image
              src={item.img}
              alt="PhysioPeak Clinical Work"
              fill
              className="z-0 object-cover saturate-[0.7] transition-all duration-1000 ease-out group-hover:scale-110 group-hover:saturate-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
              <div className="translate-y-8 transform transition-transform duration-500 group-hover:translate-y-0">
                {/* Description reveal with Grid-Rows logic */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                  <p className="overflow-hidden text-sm leading-relaxed text-gray-200 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="bg-primary mt-6 h-1 w-0 transition-all duration-700 group-hover:w-16" />
              </div>
            </div>

            {/* Glassmorphism Inner Border */}
            <div className="pointer-events-none absolute inset-0 z-30 rounded-4xl border border-white/5 transition-colors group-hover:border-white/20" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurWorkMasonry;
