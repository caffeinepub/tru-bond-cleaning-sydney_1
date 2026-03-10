import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function OvenCleaning({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Professional Oven Cleaning Sydney | Bond Clean Kitchen Deep Clean | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional oven and kitchen deep cleaning in Sydney. We degrease ovens, stovetops, rangehoods, and more. Part of our bond clean checklist. Book today 0488 841 883.",
      );
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            OVEN CLEANING
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Professional Oven Cleaning Sydney
          </h1>

          <img
            src="/assets/generated/service-oven-cleaning.dim_800x500.jpg"
            alt="Deep oven cleaning bond clean Sydney - Tru Bond Cleaning"
            className="rounded-xl w-full mb-6 shadow-sm"
          />

          <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              The oven is one of the most important parts of a bond clean — and
              one of the hardest to get right. Property managers check ovens
              closely. Baked-on grease, carbon build-up, and dirty glass can all
              trigger a failed inspection. Tru Bond Cleaning Sydney delivers a
              deep, professional oven clean that passes every inspection.
            </p>

            <p>
              We start by removing all oven racks, trays, and accessories. We
              soak them in a commercial degreaser solution, which dissolves
              baked-on grease and food residue. While the racks soak, we apply
              our industrial oven cleaner to the inside of the oven — walls,
              floor, ceiling, and door. We let it penetrate and break down the
              grease, then scrub every surface thoroughly.
            </p>

            <p>
              The oven door glass — both the exterior and the inner glass panels
              — gets special attention. We remove the inner glass where
              possible, clean behind it, and polish the exterior to a
              streak-free shine. Many DIY cleaners only clean the outer oven
              door and miss the streaky inner glass that agents always spot.
            </p>

            <p>
              The stovetop is degreased and scrubbed. Burner grates are soaked
              and scrubbed clean. Electric hotplates are carefully cleaned
              without damaging the elements. Glass stovetops are polished with a
              specialised glass cooktop cleaner that removes stains without
              scratching.
            </p>

            <p>
              The rangehood is one of the greasiest parts of the kitchen. We
              remove the filter, soak it to dissolve grease build-up, rinse it
              clean, and dry it before replacing. The outside of the rangehood
              is wiped down and polished. A clean rangehood makes a huge
              difference to how the kitchen looks and smells.
            </p>

            <p>
              We also clean the oven drawer (if there is one), removing grease
              and food debris. Professional oven cleaning takes 45–90 minutes
              for a standard oven. It's included in all Tru Bond Cleaning Sydney
              packages. Book today by calling or WhatsApp on 0488 841 883.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">
              Oven Cleaning Checklist
            </h2>
            <ul className="space-y-2">
              {[
                "Oven racks and trays soaked and scrubbed",
                "Oven interior walls, floor, and ceiling cleaned",
                "Oven door glass polished inside and out",
                "Inner oven glass panels cleaned",
                "Stovetop degreased and scrubbed",
                "Burner grates soaked and cleaned",
                "Glass cooktop polished (if applicable)",
                "Rangehood filter soaked and cleaned",
                "Rangehood exterior wiped down",
                "Oven drawer cleaned",
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
