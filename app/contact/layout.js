import "@/app/_styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading", // Custom CSS variable name
});

export default function RootLayout({ children }) {
  return <main className={`${montserrat.className} `}>{children}</main>;
}
