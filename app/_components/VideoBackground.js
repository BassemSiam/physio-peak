
import SendEmail from "./SendEmail";

function VideoBackground({ src, headerText, text, buttonDisplay }) {
  return (
    <div className="video-background-container flex items-center justify-center">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay mt-18 flex flex-col items-center gap-3 text-center md:gap-7">
        <h1 className="text-primary animate-in fade-in slide-in-from-bottom-4 text-5xl font-extrabold tracking-tighter uppercase duration-700 md:text-7xl">
          {headerText}
        </h1>
        <p
          className={`max-w-2xl text-lg leading-relaxed font-medium text-gray-100 md:text-2xl ${buttonDisplay ? "mb-4" : ""}`}
        >
          {text}
        </p>
        {!buttonDisplay && <SendEmail />}

        {/* {buttonDisplay && (
          <Link href="/contact" >
            <Button className="bg-primary px-4 py-3 text-xs transition-transform hover:scale-105 md:px-8 md:py-5 md:text-xl mt-4">
              Contact us
            </Button>
          </Link>
        )} */}
      </div>
    </div>
  );
}

export default VideoBackground;
