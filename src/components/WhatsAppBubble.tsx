import { MessageCircle } from "lucide-react";

export function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/447942281016"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
}
