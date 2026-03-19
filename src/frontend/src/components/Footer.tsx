import { MessageCircle, Phone } from "lucide-react";
import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const suburbs: { label: string; page: Page }[] = [
    { label: "Bond Cleaning Bondi", page: "bondi" },
    { label: "Bond Cleaning Parramatta", page: "parramatta" },
    { label: "Bond Cleaning Chatswood", page: "chatswood" },
    { label: "Bond Cleaning Manly", page: "manly" },
    { label: "Bond Cleaning Hurstville", page: "hurstville" },
    { label: "Bond Cleaning Newtown", page: "newtown" },
    { label: "Bond Cleaning Randwick", page: "randwick" },
    { label: "Bond Cleaning Cronulla", page: "cronulla" },
    { label: "Bond Cleaning Strathfield", page: "strathfield" },
    { label: "Bond Cleaning Penrith", page: "penrith" },
    { label: "Bond Cleaning Castle Hill", page: "castle-hill" },
    { label: "Bond Cleaning Liverpool", page: "liverpool" },
    { label: "Bond Cleaning Kogarah", page: "kogarah" },
    { label: "Bond Cleaning Burwood", page: "burwood" },
    { label: "Bond Cleaning Pymble", page: "pymble" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-extrabold text-white mb-1">
              Tru Bond Cleaning
            </div>
            <div className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">
              Sydney
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sydney's trusted bond cleaning specialists. We help you get your
              full bond back — guaranteed.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="tel:0488841883"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4" /> 0488 841 883
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Bond Cleaning", page: "bond-cleaning" as Page },
                { label: "Carpet Cleaning", page: "carpet-cleaning" as Page },
                {
                  label: "Bathroom Cleaning",
                  page: "bathroom-cleaning" as Page,
                },
                { label: "Window Cleaning", page: "window-cleaning" as Page },
                { label: "Oven Cleaning", page: "oven-cleaning" as Page },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    type="button"
                    onClick={() => navigate(item.page)}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Suburbs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Sydney Suburbs</h4>
            <ul className="space-y-1 text-sm">
              {suburbs.slice(0, 8).map((item) => (
                <li key={item.page}>
                  <button
                    type="button"
                    onClick={() => navigate(item.page)}
                    className="hover:text-white hover:underline transition-colors text-xs"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Suburbs + Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">More Suburbs</h4>
            <ul className="space-y-1 text-sm mb-4">
              {suburbs.slice(8).map((item) => (
                <li key={item.page}>
                  <button
                    type="button"
                    onClick={() => navigate(item.page)}
                    className="hover:text-white hover:underline transition-colors text-xs"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />{" "}
                  WhatsApp: 0488 841 883
                </a>
              </li>
              <li>
                <a
                  href="tel:0488841883"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" /> 0488 841
                  883
                </a>
              </li>
              <li className="text-gray-400">7 days, 7am – 8pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Tru Bond Cleaning Sydney. All rights
          reserved. | Professional Bond Cleaning Sydney
        </div>
      </div>
    </footer>
  );
}
