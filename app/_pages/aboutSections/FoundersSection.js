import { therapists } from "@/app/_data/servicesData";
import Image from "next/image";

function FoundersSection() {
  return (
    <section className="px-4 py-16">
      {/* Header Section */}
      <div className="mb-20 text-center">
        <span className="text-primary mb-3 block text-sm font-bold tracking-widest uppercase">
          Our Leadership
        </span>
        <h1 className="from-primary via-primary bg-linear-to-r to-gray-800 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
          Founders & Principals
        </h1>
        <div className="bg-primary/30 relative mx-auto mt-6 h-1.5 w-24 rounded-full">
          <div className="bg-primary absolute inset-0 w-1/2 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {therapists.map((dr, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div
              data-aos="fade-up"
              className="relative h-80 w-full overflow-hidden md:h-125"
            >
              <Image
                src={dr.image}
                alt={`${dr.name} ${dr.surname}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-1 flex-col justify-center bg-linear-to-br from-white to-gray-50 p-8 lg:p-12"
            >
              <header className="mb-6">
                <h2 className="text-3xl font-black tracking-tight text-gray-900 lg:text-4xl">
                  {dr.name} <span className="text-primary">{dr.surname}</span>
                </h2>
                <div className="bg-primary/20 mt-4 h-1 w-16 overflow-hidden rounded-full">
                  <div className="bg-primary h-full w-1/2" />
                </div>
              </header>

              <p className="text-lg leading-relaxed text-gray-600">
                {dr.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoundersSection;
