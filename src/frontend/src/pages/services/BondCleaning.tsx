import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";

interface Props {
  navigate: (page: Page) => void;
}

export default function BondCleaning({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Professional Bond Cleaning Sydney | 100% Bond Back Guarantee | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "End of lease cleaning experts in Sydney. REINSW-approved checklist, fixed pricing, free re-clean guarantee. Get your full bond back today. Call 0488 841 883.",
      );
  }, []);

  const checklist = [
    "Inside all kitchen cupboards and drawers",
    "Oven, stovetop, and rangehood filter degreased",
    "Benchtops, splashbacks, and sink polished",
    "Bathrooms scrubbed — tiles, toilet, shower, vanity",
    "Soap scum and limescale removed",
    "All windows cleaned inside and out",
    "Carpets vacuumed and steam cleaned (on request)",
    "Hard floors vacuumed and mopped",
    "Ceiling fans and light fittings dusted",
    "Walls and skirting boards spot-cleaned",
    "Laundry area cleaned",
    "All mirrors polished streak-free",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            END OF LEASE CLEANING
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Professional Bond Cleaning Sydney
          </h1>

          <img
            src="/assets/generated/service-bond-cleaning.dim_800x500.jpg"
            alt="End of lease kitchen cleaning service Sydney - Tru Bond Cleaning"
            className="rounded-xl w-full mb-6 shadow-sm"
          />

          <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              Professional bond cleaning in Sydney means getting every cent of
              your bond back when you move out. At Tru Bond Cleaning, we make
              that happen. Our expert team works through every room of your
              rental property using the REINSW-approved checklist — the exact
              same list your real estate agent uses during their final
              inspection.
            </p>

            <p>
              We clean your kitchen from top to bottom. We scrub the oven,
              degrease the stovetop, wipe down all benchtops, clean inside every
              cupboard and drawer, and polish the sink until it shines. We
              tackle the rangehood filter, remove all grease, and leave your
              kitchen looking showroom-fresh.
            </p>

            <p>
              In the bathrooms, we scrub tiles, remove soap scum and limescale,
              clean the toilet inside and out, polish mirrors, wipe the vanity,
              and leave the shower sparkling. We don't just wipe surfaces — we
              deep clean them.
            </p>

            <p>
              Your bedrooms and living areas get full attention too. We dust all
              surfaces, clean ceiling fans and light fittings, spot-clean walls
              and skirting boards, vacuum carpets, and mop hard floors. If
              needed, we also steam clean carpets as an add-on service.
            </p>

            <p>
              We clean window glass inside and out, wipe tracks and frames, and
              make sure every window gleams. We also clean the laundry area —
              the washing machine exterior, sink, and benches.
            </p>

            <p>
              Why choose professional bond cleaning over DIY? Simple — real
              estate agents have high standards. They check areas most people
              forget. Our trained team knows exactly what agents look for, and
              we don't miss anything. If they do raise a concern, we come back
              and fix it for free within 72 hours.
            </p>

            <p>
              Our pricing is fixed and upfront. You know exactly what you're
              paying before we start. No hidden fees, no hourly surprises. A
              standard 2-bedroom apartment starts from $300. Call or WhatsApp us
              on 0488 841 883 or book online for a free quote. We're available 7
              days a week across all Sydney suburbs.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">
              What's Included in Our Bond Clean
            </h2>
            <ul className="space-y-2">
              {checklist.map((item, i) => (
                <li
                  key={i}
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
              Sydney Bond Clean Pricing
            </h3>
            <div className="space-y-2 text-sm">
              {[
                ["1 Bedroom", "From $220"],
                ["2 Bedroom", "From $320"],
                ["3 Bedroom", "From $420"],
                ["4 Bedroom", "From $550"],
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
