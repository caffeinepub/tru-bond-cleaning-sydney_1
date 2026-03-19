import { Award, CheckCircle, Phone, Shield, Star } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function Parramatta({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Parramatta | End of Lease Cleaning Parramatta | Tru Bond Cleaning Sydney";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning in Parramatta, Sydney. REINSW-approved, 100% bond back guarantee, fixed pricing. Serving Parramatta, Westmead, Harris Park. Call 0488 841 883.",
      );
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-parramatta.dim_800x500.jpg"
            alt="Professional bond cleaning service in Parramatta Sydney - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> PARRAMATTA & WESTERN SYDNEY
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Parramatta Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Expert end of lease cleaning in Parramatta, Westmead, Harris Park,
            and surrounding suburbs. Get your full bond back with our 100%
            guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => navigate("contact")}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-md"
            >
              <Phone className="w-4 h-4" /> 0488 841 883
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Bond Cleaning Parramatta — Sydney's Fastest Growing Suburb Needs
                a Specialist
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Parramatta is Sydney's second CBD. It's booming with new
                apartment towers, renovated heritage homes, and a massive rental
                market. If you're moving out of a Parramatta property — whether
                it's a high-rise apartment near Church Street, a unit in
                Westmead, or a family home in Harris Park — you need a bond
                clean that meets the highest professional standards.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tru Bond Cleaning has worked in Parramatta properties for over a
                decade. We understand the building types, the property managers,
                and the inspection standards in this area. We get results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Parramatta Property Types We Clean
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Parramatta has a huge variety of rental properties. New
                apartment towers near Westfield, older brick units in Harris
                Park, family homes in North Parramatta, and everything in
                between. Our team is experienced across all property types:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  {
                    title: "High-rise apartments",
                    desc: "Parramatta's new apartment towers have modern kitchens with induction cooktops, stone benchtops, and large windows. We clean each to a showroom standard.",
                  },
                  {
                    title: "Older brick units",
                    desc: "Harris Park and older Parramatta suburbs have many 1980s-era brick units with tile bathrooms and grout that needs specialist attention. We scrub until it looks new.",
                  },
                  {
                    title: "Heritage homes",
                    desc: "North Parramatta and surrounds have beautiful old homes with period details. We clean delicately and thoroughly, respecting older surfaces and fixtures.",
                  },
                  {
                    title: "Student housing near WSU",
                    desc: "We understand student rentals — they often have more wear. We work harder to bring these properties back to inspection standard.",
                  },
                ].map((t) => (
                  <li key={t.title} className="bg-blue-50 rounded-lg p-3">
                    <span className="font-semibold text-gray-900">
                      {t.title}:{" "}
                    </span>
                    <span className="text-gray-700 text-sm">{t.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Our Full Bond Clean Checklist for Parramatta Properties
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Full kitchen deep clean inside and out",
                  "Oven, stovetop, rangehood degreasing",
                  "All cupboards and drawers wiped",
                  "Bathroom tiles, grout, and toilet scrub",
                  "Shower screen and taps descaled",
                  "All windows inside and out",
                  "Window frames, tracks, and flyscreens",
                  "Carpet vacuuming and steam cleaning",
                  "Hard floor mopping and polishing",
                  "Ceiling fans and light fittings dusted",
                  "Walls spot-cleaned",
                  "Skirting boards and door frames wiped",
                  "Laundry area fully cleaned",
                  "Cobwebs removed throughout",
                  "Balcony swept and mopped",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Parramatta Bond Cleaning Prices
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                {[
                  { s: "1 Bedroom", p: "From $220" },
                  { s: "2 Bedroom", p: "From $320" },
                  { s: "3 Bedroom", p: "From $420" },
                  { s: "4+ Bedroom", p: "From $550" },
                ].map((t) => (
                  <div
                    key={t.s}
                    className="bg-blue-50 rounded-xl p-4 text-center"
                  >
                    <div className="font-bold text-gray-900 text-sm">{t.s}</div>
                    <div className="text-xl font-extrabold text-blue-700 mt-1">
                      {t.p}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Fixed price. No hidden fees.{" "}
                <button
                  type="button"
                  onClick={() => navigate("contact")}
                  className="text-blue-600 underline"
                >
                  Get a free quote
                </button>{" "}
                for your Parramatta property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Why Parramatta Renters Choose Tru Bond Cleaning
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In a market like Parramatta, where rental turnover is high and
                agents inspect dozens of properties each week, you need a
                cleaning company they already know and trust. Tru Bond Cleaning
                has built strong relationships with Parramatta real estate
                agencies. Our invoices speak for themselves — when agents see
                our name, they know the property will be clean.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our team is available 7 days a week. We understand that move-out
                dates don't always fall on weekdays. We work weekends and public
                holidays without charging extra. Just call or WhatsApp us on
                0488 841 883 and we'll get you booked in fast.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                All our Parramatta cleaners are police-checked, fully insured,
                and trained to use our REINSW-approved checklist. You can trust
                us in your home.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Book Your Parramatta Bond Clean Today
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Get a free, fixed-price quote in minutes. Available 7 days a
                week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => navigate("contact")}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold"
                >
                  Get a Free Quote
                </Button>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-md text-sm"
                >
                  <Phone className="w-4 h-4" /> WhatsApp: 0488 841 883
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="sticky top-6">
              <img
                src="/assets/generated/suburb-parramatta.dim_800x500.jpg"
                alt="Bond cleaning Parramatta apartment Sydney - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5 mb-4">
                <h3 className="font-bold mb-3">Why Tru Bond Cleaning?</h3>
                {[
                  "100% Bond Back Guarantee",
                  "REINSW Approved Checklist",
                  "Fixed Pricing",
                  "72-Hour Free Re-Clean",
                  "Police-Checked Cleaners",
                  "7 Days a Week",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm mb-2"
                  >
                    <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">
                  What Customers Say
                </h3>
                {[
                  {
                    name: "James T.",
                    text: "They cleaned our Parramatta apartment and we got the full bond back. The oven looked brand new!",
                    stars: 5,
                  },
                  {
                    name: "Mei L.",
                    text: "Booked for our Harris Park unit. Arrived on time, professional, and thorough.",
                    stars: 5,
                  },
                ].map((r) => (
                  <div key={r.name} className="mb-3">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className="w-3 h-3 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-700 italic">"{r.text}"</p>
                    <p className="text-xs font-semibold text-gray-900 mt-1">
                      {r.name} — Parramatta
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
