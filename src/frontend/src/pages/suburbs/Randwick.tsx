import { Award, CheckCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";
interface Props {
  navigate: (page: Page) => void;
}
export default function Randwick({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Randwick | End of Lease Cleaning Eastern Suburbs Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Expert bond cleaning in Randwick, Sydney. Near UNSW, Prince of Wales Hospital. 100% bond back guarantee, fixed pricing. Call 0488 841 883.",
      );
  }, []);
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-randwick.dim_800x500.jpg"
            alt="Professional bond cleaning service Randwick Eastern Suburbs Sydney - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> RANDWICK & EASTERN SUBURBS
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Randwick Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Professional end of lease cleaning in Randwick, Kensington,
            Kingsford, and all Eastern Suburbs. Fixed price, 100% bond back
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
                Bond Cleaning Randwick — Eastern Suburbs Specialists
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Randwick is a popular suburb with a mix of students from UNSW,
                hospital workers from Prince of Wales, and families. The rental
                market is competitive, and property managers here set high
                standards. From the apartments along Alison Road to the terrace
                houses near Randwick Racecourse, Tru Bond Cleaning covers every
                property type.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                We've helped hundreds of Randwick tenants pass their final
                inspection and get their full bond back. Our REINSW-approved
                checklist ensures we clean to the same standard your property
                manager uses.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Randwick Bond Clean Checklist
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Full kitchen clean",
                  "Oven and stovetop",
                  "Rangehood filter",
                  "All cupboards",
                  "Bathroom deep scrub",
                  "Shower screen and taps",
                  "All windows",
                  "Carpet steam clean",
                  "Hard floor mop",
                  "Walls and skirting",
                  "Ceiling fans",
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
                Student and Professional Rentals in Randwick
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Randwick has a large student population near UNSW. Many student
                rentals have more wear and require extra effort. We're
                experienced with high-traffic rentals and know how to restore
                them to inspection standard. We don't charge extra for harder
                cleans — our fixed price covers the work needed.
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
                Book Your Randwick Bond Clean
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
                src="/assets/generated/suburb-randwick.dim_800x500.jpg"
                alt="Bond cleaning Randwick Eastern Suburbs Sydney - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
