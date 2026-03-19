import { Award, CheckCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";
interface Props {
  navigate: (page: Page) => void;
}
export default function Cronulla({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Cronulla | End of Lease Cleaning Sutherland Shire Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning Cronulla and Sutherland Shire. Beach apartment specialists. 100% bond back guarantee. Fixed pricing. Call 0488 841 883.",
      );
  }, []);
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-cronulla.dim_800x500.jpg"
            alt="Bond cleaning Cronulla beach apartment Sutherland Shire Sydney - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> CRONULLA & SUTHERLAND SHIRE
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Cronulla Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Beach apartment and Sutherland Shire specialists. We tackle coastal
            cleaning challenges so you get your full bond back.
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
                Bond Cleaning Cronulla — Sutherland Shire Experts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cronulla is Sydney's only beachside suburb with its own train
                station, making it incredibly popular with renters. The coastal
                location means properties deal with salt air, sand, and humidity
                year-round. When it's time to move out, property managers in
                Cronulla expect a thorough clean that addresses these coastal
                challenges.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Tru Bond Cleaning serves Cronulla, Caringbah, Miranda, and the
                entire Sutherland Shire. Our team understands the specific
                cleaning needs of coastal apartments and beachside homes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Cronulla Coastal Cleaning Challenges
              </h2>
              <ul className="space-y-2">
                {[
                  {
                    title: "Salt spray on windows and glass",
                    desc: "Sea air leaves mineral deposits on all glass surfaces. We use specialist glass cleaners for streak-free, spot-free results.",
                  },
                  {
                    title: "Sand in all the wrong places",
                    desc: "Sand gets everywhere in a beach suburb. Our steam clean removes sand from carpets and our detailed clean removes it from all surfaces.",
                  },
                  {
                    title: "Mould in wet areas",
                    desc: "Cronulla's humidity makes mould a serious problem in bathrooms and laundries. We treat all affected areas with specialist anti-mould products.",
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
                Book Your Cronulla Bond Clean
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
                src="/assets/generated/suburb-cronulla.dim_800x500.jpg"
                alt="End of lease cleaning Cronulla beach Sydney Sutherland Shire - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3">Our Guarantees</h3>
                {[
                  "100% Bond Back Guarantee",
                  "Coastal Specialists",
                  "REINSW Checklist",
                  "Fixed Pricing",
                  "72-Hour Re-Clean",
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
