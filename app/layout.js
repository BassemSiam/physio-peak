import "@/app/_styles/globals.css";
import { Montserrat } from "next/font/google";
import AOSInit from "./_components/AosAnimation";
import Footer from "./_components/Footer";
import WhatsappFloating from "./_components/WhatsappFloating";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Physio Peak",
  description: "physiotherapy clinic",
  icons: {
    icon: "/logo-white-c.png", // This looks into your public/ folder automatically
    shortcut: "/logo-white-c.png",
    apple: "/logo-white-c.png", // For iOS devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${montserrat.className} }`}>
        <AOSInit />
        {children}
        <WhatsappFloating />
        <Footer />
      </body>
    </html>
  );
}
