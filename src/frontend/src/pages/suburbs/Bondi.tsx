import { Award, CheckCircle, Phone, Shield, Star } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function Bondi({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Bondi Sydney | End of Lease Cleaning Bondi Beach | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning in Bondi, Sydney. REINSW-approved checklist, 100% bond back guarantee, fixed pricing. Serving Bondi Beach, Bondi Junction & surrounding suburbs. Call 0488 841 883.",
      );
  }, []);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-bondi.dim_800x500.jpg"
            alt="Professional bond cleaning service in Bondi Beach Sydney - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> BONDI & BONDI JUNCTION
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Bondi Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Trusted end of lease cleaning in Bondi Beach, Bondi Junction, and
            North Bondi. We help you get your full bond back — guaranteed.
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
                Professional Bond Cleaning in Bondi — We Know What Your Agent
                Expects
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Moving out of a rental in Bondi? Whether you live in a beachside
                apartment on Campbell Parade, a unit in Bondi Junction, or a
                terrace house in North Bondi, getting your full bond back starts
                with a professional bond clean. At Tru Bond Cleaning Sydney, we
                have helped hundreds of Bondi tenants pass their final
                inspection with flying colours.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Bondi is one of Sydney's most competitive rental markets.
                Property managers in this area are thorough. They check every
                corner, every appliance, and every window. That's why you need a
                cleaning team that knows exactly what to look for — and how to
                fix it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Why Bondi Renters Trust Tru Bond Cleaning
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We have been cleaning rental properties in Bondi for over a
                decade. We understand the unique challenges of Bondi apartments
                — salt air can leave mineral deposits on glass, beach sand gets
                into carpet fibres, and older terrace homes have grout and tiles
                that need extra care.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our team uses the REINSW-approved end of lease cleaning
                checklist — the same checklist your property manager uses when
                they inspect the property. We do not miss anything. From the
                oven to the ceiling fans, from the shower screen to the skirting
                boards, we clean everything to the standard required by Sydney
                real estate agents.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Every Bondi bond clean we do comes with our 72-hour free
                re-clean guarantee. If your agent finds anything we missed, we
                come back at no extra cost. No arguments. No hassle. Just
                results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                What's Included in Our Bondi Bond Clean
              </h2>
              <p className="text-gray-700 mb-3">
                Every room in your Bondi property gets the full treatment:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Deep oven and stovetop degreasing",
                  "Rangehood filter cleaning",
                  "All kitchen cupboards inside and out",
                  "Benchtop and splashback scrubbing",
                  "Bathroom scrub — tiles, grout, toilet, shower",
                  "Shower screen limescale removal",
                  "Window cleaning inside and out",
                  "Window tracks and frames",
                  "Carpet vacuum and steam cleaning",
                  "Hard floor mop and polish",
                  "Dust all ceiling fans and light fittings",
                  "Spot clean walls and skirting boards",
                  "Wipe all door frames and handles",
                  "Clean laundry tub and machine exterior",
                  "Remove cobwebs throughout",
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
                Bondi Property Tips — What Local Agents Look For
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Living near Bondi Beach means your property gets a lot of use.
                Salt air, sand, and high foot traffic all affect how your
                property looks at the final inspection. Here's what Bondi
                property managers pay close attention to:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  {
                    title: "Salt deposits on glass",
                    desc: "Windows and shower screens near the beach often build up mineral deposits from sea air. We use specialist glass cleaners to remove these without scratching.",
                  },
                  {
                    title: "Sand in carpets",
                    desc: "Sand is abrasive and gets deep into carpet fibres. Regular vacuuming is not enough. Our hot water extraction steam clean removes sand and restores carpet condition.",
                  },
                  {
                    title: "Mould in bathrooms",
                    desc: "Bondi's humid coastal climate encourages mould growth. We treat grout and silicone with specialist mould removers to ensure your bathroom passes inspection.",
                  },
                  {
                    title: "Balcony and outdoor areas",
                    desc: "Many Bondi apartments have balconies. We sweep, mop, and clean all outdoor areas including railings and glass balustrades.",
                  },
                ].map((tip) => (
                  <li key={tip.title} className="bg-blue-50 rounded-lg p-3">
                    <span className="font-semibold text-gray-900">
                      {tip.title}:{" "}
                    </span>
                    <span className="text-gray-700 text-sm">{tip.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Bond Cleaning Prices in Bondi
              </h2>
              <p className="text-gray-700 mb-4">
                Bondi properties range from studios to 4-bedroom houses. Our
                fixed pricing means no surprises:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { s: "Studio / 1 Bed", p: "From $220" },
                  { s: "2 Bedroom", p: "From $320" },
                  { s: "3 Bedroom", p: "From $420" },
                  { s: "4 Bedroom+", p: "From $550" },
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
              <p className="text-sm text-gray-500 mt-3">
                Carpet steam cleaning, pest control, and external window
                cleaning are available as add-ons.{" "}
                <button
                  type="button"
                  onClick={() => navigate("contact")}
                  className="text-blue-600 underline"
                >
                  Get a free quote
                </button>{" "}
                for your exact property size.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Our Experience and Expertise in Bondi
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tru Bond Cleaning has completed bond cleans for properties
                managed by all major Bondi real estate agencies. Our team
                leaders each have more than 5 years of professional cleaning
                experience, and all cleaners are police-checked and fully
                insured.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                We understand that in Bondi, rental prices are high and bonds
                are large. A 2-bedroom Bondi apartment can carry a bond of
                $4,000 to $6,000 or more. That money is yours. Our job is to
                make sure you get every dollar back.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                We have a 98% first-inspection pass rate in Bondi. When agents
                see a Tru Bond Cleaning invoice, they know the property has been
                cleaned to a professional standard.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Ready to Book Your Bondi Bond Clean?
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Contact us today for a fast, free quote. We're available 7 days
                a week including weekends and public holidays. Bondi and all
                surrounding suburbs covered.
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
                src="/assets/generated/suburb-bondi.dim_800x500.jpg"
                alt="Bond cleaning Bondi Beach apartment Sydney - Tru Bond Cleaning team"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5 mb-4">
                <h3 className="font-bold mb-3">
                  Why Choose Tru Bond Cleaning?
                </h3>
                {[
                  "100% Bond Back Guarantee",
                  "REINSW Approved Checklist",
                  "Fixed Pricing — No Surprises",
                  "72-Hour Free Re-Clean",
                  "Police-Checked Cleaners",
                  "Eco-Friendly Products",
                  "Available 7 Days a Week",
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
                  Customer Reviews
                </h3>
                {[
                  {
                    name: "Sarah M.",
                    text: "Full bond back after our Bondi Junction apartment clean. Absolutely spotless!",
                    stars: 5,
                  },
                  {
                    name: "Chris L.",
                    text: "They handled our beach apartment perfectly. Agent was impressed.",
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
                      {r.name} — Bondi
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
