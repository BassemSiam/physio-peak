import PhysioPeakWord from "../_components/PhysioPeakWord";

function VideoPhysioPeak() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-16 md:py-32">
          <div className="mb-16 text-center">
            <h1 className="from-primary via-primary bg-linear-to-r to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              Our Story
            </h1>
            <div className="bg-primary mx-auto mt-4 h-1.5 w-20 rounded-full" />
          </div>

        <div
          className="group relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl"
          data-aos="zoom-in"
        >
          <video
            controls
            className="aspect-video w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
            preload="metadata"
          >
            <source src="/Physio Peak.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset" />
        </div>
      </section>
    </>
  );
}

export default VideoPhysioPeak;
