import { Mail, MapPin, Phone, PhoneCall, Printer } from "lucide-react";

function ContactData({ data }) {
  return (
    <div>
      <ul className="space-y-8">
        <li className="flex flex-wrap items-center gap-6 text-gray-400">
          {/* Phone Number 1 */}
          <a
            href={`tel:${data?.dial1}`}
            className="hover:text-primary flex items-center gap-2 transition-colors"
          >
            <PhoneCall size={20} className="text-primary" />
            <span>{data?.number1}</span>
          </a>

          {/* Phone Number 2 */}
          <a
            href={`tel:${data?.dial2}`}
            className="hover:text-primary flex items-center gap-2 transition-colors"
          >
            <Phone size={20} className="text-primary" />
            <span>{data?.number2}</span>
          </a>
        </li>

        <li className="flex items-center gap-3 text-gray-400">
          <div className="flex items-center gap-2 transition-colors">
            <Printer size={20} className="text-primary" />
            <span className="flex gap-1">
              <span className="font-semibold text-gray-300">Fax:</span>
              {data?.fax}
            </span>
          </div>
        </li>
        <li className="flex items-center gap-3 text-gray-400">
          <a
            href="mailto:info@physiopeak.com.au"
            className="hover:text-primary flex items-center gap-2 transition-colors"
          >
            <Mail size={20} className="text-primary" />
            <span>info@physiopeak.com.au</span>
          </a>
        </li>

        <li className="flex items-center gap-3 text-gray-400">
          <a
            href={`https://www.google.com/maps?q=${data?.lat},${data?.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary flex items-center gap-2 transition-colors"
          >
            <MapPin size={24} className="text-primary shrink-0" />
            <span className="max-w-75">{data?.address}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactData;
