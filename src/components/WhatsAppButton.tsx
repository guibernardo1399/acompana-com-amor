import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5591984832468?text=Olá! Gostaria de saber mais sobre as aulas particulares.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;