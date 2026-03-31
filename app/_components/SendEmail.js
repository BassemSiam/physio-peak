import { Mail } from "lucide-react";

function SendEmail() {
  return (
    <div className="mt-6 flex justify-center md:justify-start">
      <a
        href="mailto:info@physiopeak.com.au"
        className="group bg-primary hover:text-primary hover:ring-primary hover:shadow-primary/20 flex items-center gap-3 rounded-full px-6 py-3 text-sm font-bold tracking-tight text-white shadow-lg transition-all duration-300 hover:bg-white hover:ring-2 md:gap-4 md:px-10 md:py-4 md:text-xl"
      >
        {/* Responsive Icon Size */}
        <Mail
          className="shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          size={20}
        />

        <span className="max-w-50 truncate sm:max-w-none">
          info@physiopeak.com.au
        </span>
      </a>
    </div>
  );
}

export default SendEmail;
