import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919447997254";
  const message = encodeURIComponent("Hello! I'm interested in your gold loan services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="hidden sm:block px-4 py-2 rounded-full bg-card border border-border shadow-soft text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us!
      </span>
      
      {/* Button */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-300 animate-pulse-gold">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
