import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function CarpetCleaning({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Professional Carpet Steam Cleaning Sydney | Bond Clean Add-On | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional carpet steam cleaning in Sydney for end of lease. Removes stains, pet odours, and deep dirt. Add carpet cleaning to your bond clean today. 0488 841 883.",
      );
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            CARPET CLEANING
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Professional Carpet Steam Cleaning Sydney
          </h1>

          <img
            src="/assets/generated/service-carpet-cleaning.dim_800x500.jpg"
            alt="Professional carpet steam cleaning Sydney - Tru Bond Cleaning"
            className="rounded-xl w-full mb-6 shadow-sm"
          />

          <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              Most landlords and property managers in Sydney require
              professional carpet steam cleaning as part of the bond clean. It's
              not optional — it's written into most NSW lease agreements. Tru
              Bond Cleaning provides professional hot water extraction carpet
              cleaning across all Sydney suburbs.
            </p>

            <p>
              Hot water extraction (steam cleaning) is the gold standard for
              carpet cleaning. We pump hot water and cleaning solution deep into
              your carpet fibres at high pressure, loosening dirt, bacteria, and
              allergens. Then we extract everything back out, leaving your
              carpets fresh, clean, and nearly dry within 4–6 hours.
            </p>

            <p>
              Stains? No problem. Our team carries professional stain
              pre-treatment solutions that tackle red wine, coffee, pet
              accidents, mud, and more. We apply the pre-treatment, let it work,
              then steam clean over the top. Most stains lift completely. Older,
              set-in stains may lighten significantly.
            </p>

            <p>
              Pet owners — we know the struggle. Our enzyme-based deodorising
              treatment breaks down pet urine and odour at the molecular level,
              not just masking the smell. Your carpets will smell fresh, not
              like chemicals.
            </p>

            <p>
              How long does it take? For a 2-bedroom apartment, carpet cleaning
              takes about 1–2 hours. We carry professional equipment that speeds
              up the job without cutting corners. Drying time is typically 3–6
              hours depending on ventilation and weather. We recommend opening
              windows and turning on fans after we finish.
            </p>

            <p>
              Why add carpet cleaning to your bond package? Bundling saves you
              money. When you book bond cleaning and carpet cleaning together
              with Tru Bond Cleaning Sydney, you get a discounted combined
              price. Plus, we're already at the property — there's no need to
              organise a separate tradesperson.
            </p>

            <p>
              Pricing starts from $80 for a single room and $120–$200 for a full
              2–3 bedroom apartment. Call or WhatsApp 0488 841 883 for an exact
              quote based on your carpet areas.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">
              Why Choose Steam Cleaning?
            </h2>
            <ul className="space-y-2">
              {[
                "Removes deep-down dirt and allergens",
                "Eliminates bacteria and dust mites",
                "Treats and removes most stains",
                "Enzyme treatment for pet odours",
                "Carpets dry in 3–6 hours",
                "REINSW standard — satisfies property managers",
                "Safe for kids and pets",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-3">
              Carpet Cleaning Pricing
            </h3>
            <div className="space-y-2 text-sm">
              {[
                ["1 Room", "From $80"],
                ["2 Rooms", "From $140"],
                ["3 Rooms", "From $180"],
                ["4+ Rooms", "From $220"],
              ].map(([size, price]) => (
                <div key={size} className="flex justify-between">
                  <span className="text-gray-700">{size}</span>
                  <span className="font-bold text-blue-700">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={() => navigate("contact")}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3"
          >
            Get a Free Quote
          </Button>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md transition-colors"
          >
            WhatsApp: 0488 841 883
          </a>
        </div>
      </div>
    </div>
  );
}
