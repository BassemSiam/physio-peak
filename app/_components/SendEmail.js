import { Mail } from "lucide-react";

function SendEmail() {
  return (
    <div className="mt-5">
      <a
        href="mailto:info@physiopeak.com.au"
        target="_blank"
        className="flex items-center gap-2 hover:text-gray-700"
      >
        <Mail size={20} className="text-primary" />
        <span>info@physiopeak.com.au</span>
      </a>
    </div>
  );
}

export default SendEmail;
