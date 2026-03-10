import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      data-ocid="whatsapp.button"
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
    </a>
  );
}
