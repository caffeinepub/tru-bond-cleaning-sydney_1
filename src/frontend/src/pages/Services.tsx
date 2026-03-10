import { useEffect } from "react";
import type { Page } from "../App";

interface ServicesProps {
  navigate: (page: Page) => void;
}

const serviceList = [
  {
    title: "Bond Cleaning",
    page: "bond-cleaning" as Page,
    img: "/assets/generated/service-bond-cleaning.dim_800x500.jpg",
    alt: "End of lease kitchen cleaning service Sydney - Tru Bond Cleaning",
    desc: "Full end-of-lease clean to REINSW standard. Kitchen, bathrooms, bedrooms, living areas, windows, and more. 100% Bond Back Guarantee.",
    price: "From $220",
  },
  {
    title: "Carpet Cleaning",
    page: "carpet-cleaning" as Page,
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sydney - Tru Bond Cleaning",
    desc: "Professional hot water extraction (steam cleaning). Removes deep dirt, stains, and pet odours. Fast drying time.",
    price: "From $80/room",
  },
  {
    title: "Bathroom Cleaning",
    page: "bathroom-cleaning" as Page,
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Professional bathroom cleaning for bond return Sydney - Tru Bond Cleaning",
    desc: "Deep scrub of tiles, grout, toilet, shower screen, bathtub, vanity, mirrors, and exhaust fans. Mould treatment included.",
    price: "Included in bond clean",
  },
  {
    title: "Window Cleaning",
    page: "window-cleaning" as Page,
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Window cleaning end of lease Sydney - Tru Bond Cleaning",
    desc: "Streak-free window glass inside and out. Tracks, frames, and flyscreens cleaned. Extension poles for upper floors.",
    price: "Included in bond clean",
  },
  {
    title: "Oven Cleaning",
    page: "oven-cleaning" as Page,
    img: "/assets/generated/service-oven-cleaning.dim_800x500.jpg",
    alt: "Deep oven cleaning bond clean Sydney - Tru Bond Cleaning",
    desc: "Deep degrease of oven interior, door glass, racks, stovetop, rangehood filter, and surrounds. Crystal clean results.",
    price: "Included in bond clean",
  },
];

export default function Services({ navigate }: ServicesProps) {
  useEffect(() => {
    document.title = "Bond Cleaning Services Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Complete bond cleaning services in Sydney — carpet cleaning, bathroom, windows, oven cleaning. Fixed prices, satisfaction guarantee. Book today 0488 841 883.",
      );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Bond Cleaning Services in Sydney
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer everything you need to pass your final inspection and get
          your bond back. Fixed pricing, 100% guarantee, available 7 days.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service) => (
          <div
            key={service.page}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <img
              src={service.img}
              alt={service.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
              <div className="text-blue-700 font-semibold text-sm mb-4">
                {service.price}
              </div>
              <button
                onClick={() => navigate(service.page)}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md text-sm transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
