import { Award, CheckCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";
interface Props {
  navigate: (page: Page) => void;
}
export default function Pymble({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Pymble | End of Lease Cleaning Upper North Shore Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning in Pymble, Gordon, Turramurra, and Upper North Shore Sydney. 100% bond back guarantee. Call 0488 841 883.",
      );
  }, []);
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-pymble.dim_800x500.jpg"
            alt="Bond cleaning Pymble Upper North Shore Sydney family home - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> PYMBLE & UPPER NORTH SHORE
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Pymble Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Premium bond cleaning for Pymble, Gordon, Turramurra, and St Ives.
            We clean to the exacting standard of Upper North Shore property
            managers.
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
                Bond Cleaning Pymble — Upper North Shore Specialists
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pymble is one of Sydney's most prestigious Upper North Shore
                suburbs. Large family homes on tree-lined streets, leafy
                gardens, and high-end finishes are the norm. Property managers
                in Pymble and the surrounding Gordon, Turramurra, and St Ives
                area expect a very high standard of cleaning at the end of a
                lease.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tru Bond Cleaning is experienced with premium Upper North Shore
                properties. We bring the care, expertise, and time needed to
                clean large, high-quality homes to the standard required. Our
                fixed pricing and bond back guarantee mean you're fully
                protected.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Premium Home Bond Clean Checklist
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Large kitchen full clean",
                  "Premium appliances cleaned",
                  "Stone benchtops polished",
                  "Multiple bathrooms and ensuites",
                  "All windows inside and out",
                  "Carpet steam clean throughout",
                  "Timber and stone floors polished",
                  "Ducted AC vents and return ducts",
                  "Ceiling fans and light fittings",
                  "Walls, skirting, door frames",
                  "Pool area and outdoor entertaining",
                  "Garage and storage areas",
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
                Book Your Pymble Bond Clean
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
                src="/assets/generated/suburb-pymble.dim_800x500.jpg"
                alt="Bond cleaning Pymble Upper North Shore Sydney premium home - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3">Our Guarantees</h3>
                {[
                  "100% Bond Back Guarantee",
                  "Premium Property Experts",
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
