import { Award, CheckCircle, Phone, Star } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function Chatswood({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Chatswood | End of Lease Cleaning Chatswood Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Expert bond cleaning in Chatswood Sydney. REINSW checklist, 100% bond back guarantee, fixed pricing. Serving Chatswood, Artarmon & Lane Cove. Call 0488 841 883.",
      );
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-chatswood.dim_800x500.jpg"
            alt="Professional bond cleaning service in Chatswood Sydney high-rise apartment - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> CHATSWOOD & NORTH SHORE
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Chatswood Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Professional end of lease cleaning in Chatswood, Artarmon, and Lane
            Cove. We clean your apartment or home to the standard your property
            manager expects.
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
                Bond Cleaning Chatswood — Specialists in North Shore Apartments
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Chatswood is one of Sydney's most popular North Shore suburbs,
                with a huge concentration of modern apartment buildings and a
                highly competitive rental market. If you're vacating a Chatswood
                apartment — particularly in the towers near Westfield or along
                Victoria Avenue — you need a bond clean that meets the high
                standards of North Shore property managers.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tru Bond Cleaning has cleaned hundreds of Chatswood apartments.
                Our team knows what the top real estate agencies in this area
                look for and how to make sure you pass inspection on the first
                visit.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Chatswood Property Tips
              </h2>
              <ul className="space-y-2">
                {[
                  {
                    title: "High-rise towers",
                    desc: "Chatswood has many luxury high-rise apartments with stone benchtops, glass splash backs, and large windows. We use professional glass cleaners for streak-free results.",
                  },
                  {
                    title: "Timber floors",
                    desc: "Many Chatswood apartments have timber or timber-look flooring. We use appropriate floor cleaners to clean without damaging the surface.",
                  },
                  {
                    title: "Stainless steel appliances",
                    desc: "Modern kitchens with stainless steel need specialist polish to avoid streaks and fingerprints — something agents notice immediately.",
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
                Full Bond Clean Checklist
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Kitchen deep clean inside and out",
                  "Oven and stovetop degreasing",
                  "Rangehood filter clean",
                  "Bathroom scrub and descale",
                  "Shower screen and mirrors",
                  "Windows inside and out",
                  "Carpet steam cleaning",
                  "Hard floor mop",
                  "Ceiling fans and light fittings",
                  "Walls, skirting, and door frames",
                  "Laundry area",
                  "Balcony sweep and mop",
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
                Why Chatswood Tenants Trust Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our 100% Bond Back Guarantee means if your agent isn't
                satisfied, we come back within 72 hours at no extra cost. Fixed
                pricing, no surprises. All cleaners are police-checked and fully
                insured. We service Chatswood, Artarmon, Lane Cove, and all
                surrounding North Shore suburbs.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { s: "1 Bed", p: "From $220" },
                { s: "2 Bed", p: "From $320" },
                { s: "3 Bed", p: "From $420" },
                { s: "4+ Bed", p: "From $550" },
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
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Book Your Chatswood Bond Clean
              </h3>
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
                  <Phone className="w-4 h-4" /> 0488 841 883
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-6">
              <img
                src="/assets/generated/suburb-chatswood.dim_800x500.jpg"
                alt="End of lease cleaning Chatswood North Shore Sydney - Tru Bond Cleaning team"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5 mb-4">
                <h3 className="font-bold mb-3">Our Guarantees</h3>
                {[
                  "100% Bond Back Guarantee",
                  "REINSW Checklist",
                  "Fixed Pricing",
                  "72-Hour Re-Clean",
                  "Police-Checked Staff",
                  "7 Days Available",
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
                <h3 className="font-bold text-gray-900 mb-3">Reviews</h3>
                {[
                  {
                    name: "Priya K.",
                    text: "Chatswood apartment passed inspection first time. Brilliant service!",
                  },
                  {
                    name: "David W.",
                    text: "Spotless clean. Bond returned in full. Highly recommend.",
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
                      {r.name} — Chatswood
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
