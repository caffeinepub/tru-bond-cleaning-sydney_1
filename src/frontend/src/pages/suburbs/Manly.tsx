import { Award, CheckCircle, Phone, Star } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function Manly({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Manly | End of Lease Cleaning Manly Beach Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning in Manly, Sydney. Specialists in coastal apartments and beach homes. 100% bond back guarantee. Call 0488 841 883.",
      );
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-manly.dim_800x500.jpg"
            alt="Bond cleaning service in Manly Beach Sydney apartment - Tru Bond Cleaning team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> MANLY & NORTHERN BEACHES
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Manly Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Coastal apartment and beach home specialists. We tackle salt
            residue, sand, and mould to get your Manly bond back in full.
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
                Bond Cleaning Manly — Coastal Property Specialists
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Living in Manly is a dream — but the coastal environment creates
                unique cleaning challenges. Salt air corrodes and stains
                surfaces. Sea breeze brings sand inside. Humidity encourages
                mould in bathrooms. When it's time to move out, your property
                manager will check every surface carefully.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tru Bond Cleaning understands Manly properties. We've cleaned
                dozens of beachside apartments, cottages, and houses in Manly,
                Freshwater, Fairlight, and surrounding Northern Beaches suburbs.
                Our team knows what the local agents look for and how to handle
                coastal cleaning challenges.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Coastal Cleaning Challenges in Manly
              </h2>
              <ul className="space-y-2">
                {[
                  {
                    title: "Salt and mineral deposits",
                    desc: "Sea air deposits minerals on glass, tiles, and metal fittings. We use specialist descalers to remove these without scratching surfaces.",
                  },
                  {
                    title: "Sand in carpets and floors",
                    desc: "Sand is abrasive and works deep into carpet fibres. Our hot water extraction removes sand thoroughly.",
                  },
                  {
                    title: "Bathroom mould",
                    desc: "Manly's humid coastal climate creates perfect conditions for mould. We treat grout, silicone, and surfaces with specialist anti-mould products.",
                  },
                  {
                    title: "Weathered outdoor areas",
                    desc: "Balconies and decks near the ocean need extra care. We clean all outdoor surfaces including glass balustrades and timber decking.",
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
                What We Clean in Your Manly Property
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Full kitchen clean",
                  "Oven and stovetop",
                  "Bathroom deep scrub",
                  "Shower screen descale",
                  "Windows — salt deposit removal",
                  "Carpet steam clean",
                  "Hard floor mop",
                  "Balcony clean",
                  "Ceiling fans and light fittings",
                  "Wall spot clean",
                  "Skirting boards",
                  "Laundry area",
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
                Our Bond Back Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Every Manly bond clean comes with our 72-hour free re-clean
                guarantee. If your agent finds anything after inspection, we
                come back within 72 hours at no extra cost. Our REINSW-approved
                checklist means we work to the exact standard your property
                manager uses.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                In Manly, where bonds are often $4,000 to $8,000 or more, our
                professional service pays for itself many times over.
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
                Book Your Manly Bond Clean
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
                src="/assets/generated/suburb-manly.dim_800x500.jpg"
                alt="End of lease cleaning Manly Beach apartment Northern Beaches Sydney - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5 mb-4">
                <h3 className="font-bold mb-3">Our Guarantees</h3>
                {[
                  "100% Bond Back Guarantee",
                  "Coastal Property Specialists",
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
