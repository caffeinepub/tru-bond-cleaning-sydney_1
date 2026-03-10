import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function BathroomCleaning({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Professional Bathroom Cleaning Sydney | End of Lease Bond Clean | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Deep bathroom cleaning for bond returns in Sydney. Removes soap scum, limescale, mould, and grime. Part of our comprehensive bond clean checklist. Book today 0488 841 883.",
      );
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            BATHROOM CLEANING
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Professional Bathroom Cleaning Sydney
          </h1>

          <img
            src="/assets/generated/service-bathroom-cleaning.dim_800x500.jpg"
            alt="Professional bathroom cleaning for bond return Sydney - Tru Bond Cleaning"
            className="rounded-xl w-full mb-6 shadow-sm"
          />

          <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              Your bathroom is one of the most scrutinised areas during a bond
              inspection. Property managers look closely at tiles, grout, the
              toilet, shower screen, bathtub, vanity, mirrors, and exhaust fans.
              If anything looks dirty or stained, you risk losing part of your
              bond. Tru Bond Cleaning Sydney delivers a deep, thorough bathroom
              clean that passes every inspection.
            </p>

            <p>
              We start with the shower. We remove soap scum from tiles and
              shower screens using commercial-grade degreasers that are safe on
              all surfaces. We scrub grout lines to remove mildew and
              discolouration, and we polish shower screens to a streak-free
              shine. If there's a bathtub, we scrub it clean, remove any rust
              stains, and leave the enamel gleaming.
            </p>

            <p>
              The toilet gets a full clean — inside the bowl with descaler, the
              cistern, the seat, the hinges, and the base. We use hospital-grade
              disinfectant to sanitise every surface.
            </p>

            <p>
              Your vanity, basin, and tapware get the same attention. We remove
              toothpaste marks, water spots, and grime. We polish chrome taps
              and leave mirrors spotless and streak-free. Inside the vanity
              cupboards, we wipe down every shelf.
            </p>

            <p>
              We also tackle the exhaust fan — removing the cover, cleaning out
              any dust build-up, and replacing it. Exhaust fans are a common
              inspection fail point that DIY cleaners often forget.
            </p>

            <p>
              Mould is a serious problem in many Sydney bathrooms. Our
              anti-mould treatment kills surface mould on tiles and grout,
              making the bathroom look fresh and reducing the chance your
              landlord deducts cleaning costs from your bond.
            </p>

            <p>
              Floor tiles and grout are scrubbed clean, mopped, and dried. We
              check behind the toilet and in corners — places that are easy to
              miss but agents always check. Our bathroom cleaning is included in
              every standard bond clean. Book online or WhatsApp 0488 841 883
              today.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">
              Bathroom Clean Checklist
            </h2>
            <ul className="space-y-2">
              {[
                "Shower tiles scrubbed and soap scum removed",
                "Shower screen polished streak-free",
                "Grout lines cleaned and mould treated",
                "Toilet sanitised inside and out",
                "Cistern and seat cleaned",
                "Bathtub scrubbed and polished",
                "Vanity and basin wiped down",
                "Chrome taps polished",
                "Mirrors cleaned streak-free",
                "Exhaust fan cleaned",
                "Floor tiles scrubbed and mopped",
                "Behind toilet and corners checked",
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
