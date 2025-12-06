import React from "react";
import whatsappIcon from "../assets/images/whatsapp.png"; 

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-24 bg-green-500 px-2 py-1 flex items-center justify-center z-50 animate-bounce">
      <a
        href="https://whatsapp.com/channel/0029VaJGD753WHTck5yPrT1K"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white font-semibold"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
        Get in Touch
      </a>
    </div>
  );
}
