import { FaFacebook, FaInstagram } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="mt-6 flex gap-5">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary/80 text-primary transition-colors"
      >
        <FaFacebook size={40} /> {/* Slightly reduced from 45 to balance the text */}
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary/80 text-primary transition-colors"
      >
        <FaInstagram size={40} />
      </a>
    </div>
  );
}

export default SocialMedia;
