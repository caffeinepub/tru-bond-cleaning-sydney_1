import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Page } from "../App";
import { Button } from "./ui/button";

interface HeaderProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}

export default function Header({ navigate, currentPage }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services: { label: string; page: Page }[] = [
    { label: "Bond Cleaning", page: "bond-cleaning" },
    { label: "Carpet Cleaning", page: "carpet-cleaning" },
    { label: "Bathroom Cleaning", page: "bathroom-cleaning" },
    { label: "Window Cleaning", page: "window-cleaning" },
    { label: "Oven Cleaning", page: "oven-cleaning" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("home")}
            className="flex flex-col leading-tight"
          >
            <span className="text-xl font-extrabold text-blue-700 tracking-tight">
              Tru Bond Cleaning
            </span>
            <span className="text-xs font-semibold text-blue-500 tracking-widest uppercase">
              Sydney
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              type="button"
              data-ocid="nav.link"
              onClick={() => navigate("home")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === "home"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              Home
            </button>

            <div className="relative">
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  [
                    "services",
                    "bond-cleaning",
                    "carpet-cleaning",
                    "bathroom-cleaning",
                    "window-cleaning",
                    "oven-cleaning",
                  ].includes(currentPage)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  <button
                    type="button"
                    onClick={() => {
                      navigate("services");
                      setServicesOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    All Services
                  </button>
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s.page}
                      onClick={() => {
                        navigate(s.page);
                        setServicesOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              data-ocid="nav.link"
              onClick={() => navigate("about")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === "about"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              About
            </button>
            <button
              type="button"
              data-ocid="nav.link"
              onClick={() => navigate("contact")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === "contact"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              Contact
            </button>
            <Button
              data-ocid="nav.primary_button"
              onClick={() => navigate("contact")}
              className="ml-2 bg-blue-700 hover:bg-blue-800 text-white"
            >
              Get a Free Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
          {[
            { label: "Home", page: "home" as Page },
            { label: "All Services", page: "services" as Page },
            ...services,
            { label: "About", page: "about" as Page },
            { label: "Contact", page: "contact" as Page },
          ].map((item) => (
            <button
              type="button"
              key={item.page}
              data-ocid="nav.link"
              onClick={() => {
                navigate(item.page);
                setMobileOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md"
            >
              {item.label}
            </button>
          ))}
          <Button
            data-ocid="nav.primary_button"
            onClick={() => {
              navigate("contact");
              setMobileOpen(false);
            }}
            className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white"
          >
            Get a Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}
