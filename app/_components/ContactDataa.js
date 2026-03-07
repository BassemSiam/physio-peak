import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const locationLink = "https://maps.app.goo.gl/a3NaaYEftWicAND79";
function ContactData() {
  return (
    <div>
      <ul className="space-y-4">
        <li className="flex items-center gap-3 text-gray-400">
          <a
            href="tel:+61285429507"
            className="hover:text-primary flex items-center gap-2"
          >
            <Phone size={20} className="text-primary" />
            <span>(02) 80435333</span>
          </a>
        </li>
        <li className="flex items-center gap-3 text-gray-400">
          <a
            href="mailto:info@physiopeak.com.au"
            className="hover:text-primary flex items-center gap-2"
          >
            <Mail size={20} className="text-primary" />
            <span>info@physiopeak.com.au</span>
          </a>
        </li>
        <li className="flex items-center gap-3 text-gray-400">
          <a
            href={locationLink}
            target="_blank"
            className="hover:text-primary mb-5 flex items-center gap-2"
          >
            <MapPin size={20} className="text-primary" />
            <span>132 Junction Street. Nowra, NSW,2541</span>
          </a>
        </li>
        <li className="mt-8 flex gap-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-primary/90 text-primary"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-primary/90 text-primary"
          >
            <FaInstagram size={25} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactData;
