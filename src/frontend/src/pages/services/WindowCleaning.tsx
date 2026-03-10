import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function WindowCleaning({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Window Cleaning Sydney | End of Lease Bond Clean | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional window cleaning for bond returns in Sydney. We clean glass, frames, tracks, and screens inside and out. Streak-free results guaranteed. Book today.",
      );
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            WINDOW CLEANING
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Window Cleaning Sydney — End of Lease
          </h1>

          <img
            src="/assets/generated/service-window-cleaning.dim_800x500.jpg"
            alt="Window cleaning end of lease Sydney - Tru Bond Cleaning"
            className="rounded-xl w-full mb-6 shadow-sm"
          />

          <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              Clean windows make a property feel bright, fresh, and
              well-maintained. During a bond inspection, property managers check
              window glass, tracks, frames, and flyscreens. Dirty windows or
              streaky glass can trigger a failed inspection and cost you part of
              your bond. Tru Bond Cleaning Sydney delivers streak-free window
              cleaning as part of our comprehensive end-of-lease service.
            </p>

            <p>
              Our cleaners wash both the inside and outside of all window glass.
              We use a professional squeegee and cleaning solution that leaves
              glass crystal-clear with no streaks, water marks, or smudges. It's
              a big difference from wiping windows with paper towel — you'll
              notice the results immediately.
            </p>

            <p>
              Window tracks and frames collect dust, dirt, dead insects, and
              grime over time. We clean all tracks with a brush and damp cloth,
              removing every bit of build-up. Clean tracks are one of those
              small details that impress property managers and show the property
              has been genuinely cared for.
            </p>

            <p>
              Flyscreens (insect screens) are removed, washed, dried, and
              replaced. We don't skip this step — screens trap dust and
              pollution over time and need a proper clean, not just a wipe.
            </p>

            <p>
              For multi-storey properties, we use appropriate extension poles
              and tools to safely reach higher windows without the need for
              ladders. We can reach up to 2–3 storeys from ground level safely.
            </p>

            <p>
              Mirrors inside the property — bathroom mirrors, bedroom mirrors,
              and wardrobe mirrors — are included in our window cleaning. We use
              the same streak-free method for a perfectly clear finish.
            </p>

            <p>
              Sliding door glass panels and balcony doors are included as
              standard. Window cleaning is included in our standard bond
              cleaning package for most properties. Book online or call/WhatsApp
              0488 841 883.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">
              Window Cleaning Checklist
            </h2>
            <ul className="space-y-2">
              {[
                "Window glass inside and outside cleaned",
                "Streak-free professional squeegee method",
                "Window tracks and frames wiped clean",
                "Flyscreens removed, washed, and replaced",
                "Sliding door glass panels included",
                "Mirrors polished streak-free",
                "Balcony door glass cleaned",
                "Extension poles for upper-floor windows",
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
