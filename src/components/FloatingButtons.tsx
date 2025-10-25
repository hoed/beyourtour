import { Send } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+6281553942464"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-full shadow-elegant hover:shadow-glow transition-smooth hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      {/* Telegram Button */}
      <a
        href="https://t.me/beyourtour_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full shadow-elegant hover:shadow-glow transition-smooth hover:scale-110"
        aria-label="Chat on Telegram"
      >
        <Send className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
