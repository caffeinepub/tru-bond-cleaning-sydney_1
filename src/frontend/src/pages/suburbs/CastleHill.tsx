import { Award, CheckCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";
interface Props {
  navigate: (page: Page) => void;
}
export default function CastleHill({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Castle Hill | End of Lease Cleaning Hills District Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning in Castle Hill and the Hills District Sydney. 100% bond back guarantee, fixed pricing. Call 0488 841 883.",
      );
  }, []);
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-castle-hill.dim_800x500.jpg"
            alt="Bond cleaning Castle Hill Hills District Sydney home - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> CASTLE HILL & HILLS DISTRICT
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Castle Hill Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Expert end of lease cleaning in Castle Hill, Baulkham Hills,
            Kellyville, and all Hills District suburbs. Fixed price, 100% bond
            back.
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
                Bond Cleaning Castle Hill — Hills District Specialists
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Castle Hill and the Hills District are home to some of Sydney's
                most sought-after family properties. Large homes with multiple
                bathrooms, spacious kitchens, and double garages are common
                here. When it's time to move out, these properties require extra
                time and attention to clean properly.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tru Bond Cleaning has cleaned many large Hills District homes.
                We bring extra team members for bigger properties to ensure the
                job is done thoroughly on time. Our fixed pricing means no
                surprises regardless of property size.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                What We Clean in Hills District Homes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Full kitchen including large appliances",
                  "Double oven and gas stovetop",
                  "Multiple bathrooms and ensuites",
                  "All cupboards and wardrobes",
                  "All windows throughout",
                  "Carpet steam clean in all bedrooms",
                  "Tiled living areas mopped",
                  "Ceiling fans and ducted AC vents dusted",
                  "Walls, skirting, door frames",
                  "Double garage sweep and mop",
                  "Outdoor entertaining area",
                  "Laundry room",
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
                Book Your Castle Hill Bond Clean
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
                src="/assets/generated/suburb-castle-hill.dim_800x500.jpg"
                alt="End of lease cleaning Castle Hill Hills District Sydney - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3">Our Guarantees</h3>
                {[
                  "100% Bond Back Guarantee",
                  "REINSW Checklist",
                  "Fixed Pricing",
                  "72-Hour Re-Clean",
                  "Police-Checked",
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
