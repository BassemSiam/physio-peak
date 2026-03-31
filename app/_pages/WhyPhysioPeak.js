import Image from "next/image";
import Button from "../_components/Button";
import Link from "next/link";
import { RiShareForwardLine } from "react-icons/ri";
import PhysioPeakWord from "../_components/PhysioPeakWord";

function WhyPhysioPeak() {
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:items-center md:gap-12">
        <div
          data-aos="fade-up"
          className="mb-10 flex flex-col items-center text-center md:mb-0 md:items-start md:text-left"
        >
          <span className="text-primary mb-2 text-sm font-bold tracking-widest uppercase md:text-base">
            Why Choose
          </span>
          <PhysioPeakWord />
          <h2 className="mb-6 text-2xl font-medium text-gray-500 md:text-3xl">
            Physiotherapy
          </h2>

          <div className="mb-6 flex max-w-md flex-col items-center gap-4 rounded-2xl bg-gray-50 p-6 md:flex-row md:items-start md:bg-transparent md:p-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="shrink-0"
            />
            <p className="text-secondry-2 text-lg leading-relaxed font-semibold italic md:text-xl">
              &quot;Physio&quot; is our expertise; &quot;Peak&quot; is your
              potential.
            </p>
          </div>

          <p className="max-w-prose text-base leading-relaxed text-gray-600 md:text-2xl">
            At Physio Peak, our name reflects our mission: helping you reach the
            peak of your physical health. Whether recovering from an injury,
            managing chronic pain, or improving mobility, we&apos;re here to
            guide you toward your personal best.
          </p>
          <div className="mt-10">
            <Button>
              <Link href="/about" className="flex items-center gap-1">
                Know More About us
                <RiShareForwardLine />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col gap-4">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-700 hover:scale-105 md:h-75">
            <Image
              src="/p5.jpg"
              alt="img-1"
              data-aos="fade-left"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-64 w-[90%] translate-0 self-end overflow-hidden rounded-2xl shadow-xl transition-all duration-700 hover:scale-105 md:h-75 md:w-full md:translate-5">
            <Image
              src="/p6.jpg"
              alt="img-2"
              data-aos="fade-left"
              data-aos-delay="100"
              fill
              className="object-cover"
            />
            {/* Design Element: Accent box behind image (desktop only) */}
            <div className="bg-primary/10 absolute inset-0 -z-10 hidden translate-x-4 translate-y-4 rounded-2xl md:block" />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyPhysioPeak;
