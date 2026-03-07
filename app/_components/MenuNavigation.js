import Link from "next/link";
import { X } from "lucide-react"; // Or use a standard SVG

function MenuNavigation({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-100">
      {/* 1. Backdrop: Blur and Darken */}
      <div
        className="animate-in fade-in fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* 2. Side Panel */}
      <div
        className="animate-in slide-in-from-right fixed top-0 right-0 h-full w-full max-w-sm border-l border-white/10 bg-gray-900/95 p-8 shadow-2xl transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 3. Close Button Area */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={closeMenu}
            className="group flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-8 w-8 text-white transition-transform group-hover:rotate-90" />
          </button>
        </div>

        {/* 4. Navigation Links */}
        <nav>
          <ul className="flex flex-col gap-10">
            {["Home", "About", "Contact"].map((item, index) => (
              <li key={item} className="overflow-hidden">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="group hover:text-primary block text-2xl font-bold text-white transition-all"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-3">
                    {item}
                  </span>
                  {/* Subtle underline effect */}
                  <span className="bg-primary block h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 5. Optional Footer Info (Adds a nice touch) */}
        <div className="absolute bottom-10 left-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Physio{" "}
          <span className="text-primary font-semibold">Peak</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default MenuNavigation;
