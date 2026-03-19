import { Award, CheckCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import type { Page } from "../../App";
import { Button } from "../../components/ui/button";
interface Props {
  navigate: (page: Page) => void;
}
export default function Newtown({ navigate }: Props) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Newtown | End of Lease Cleaning Inner West Sydney | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Bond cleaning specialists in Newtown, Inner West Sydney. Heritage terrace and apartment experts. 100% bond back guarantee. Call 0488 841 883.",
      );
  }, []);
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/suburb-newtown.dim_800x500.jpg"
            alt="Bond cleaning Newtown Inner West terrace house Sydney - Tru Bond Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Award className="w-3 h-3" /> NEWTOWN & INNER WEST
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Bond Cleaning Newtown Sydney
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Heritage terrace and apartment specialists in Newtown, Erskineville,
            Marrickville, and the Inner West. Get your full bond back,
            guaranteed.
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
                Bond Cleaning Newtown — Inner West Heritage Property Experts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Newtown is known for its heritage terrace houses, character
                apartments, and vibrant rental community. These older properties
                have unique cleaning requirements — Victorian-era tiles,
                heritage timber floors, old ovens, and ornate cornices that
                collect dust. Tru Bond Cleaning has extensive experience
                cleaning heritage Inner West properties to the standard that
                local property managers expect.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Whether you're moving out of a terrace on King Street, a granny
                flat in Erskineville, or a share house in Marrickville, we have
                the skills and equipment to make your property sparkle.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Heritage Property Cleaning Challenges in Newtown
              </h2>
              <ul className="space-y-2">
                {[
                  {
                    title: "Ornate cornices and ceiling roses",
                    desc: "Heritage homes have decorative plaster features that collect dust. We dust carefully with soft brushes to avoid damage.",
                  },
                  {
                    title: "Heritage tiles",
                    desc: "Victorian tessellated floor tiles and original bathroom tiles need gentle specialist cleaners. We know which products are safe.",
                  },
                  {
                    title: "Timber floors",
                    desc: "Original timber floorboards need specific floor cleaners. We never use harsh chemicals that can strip finishes.",
                  },
                  {
                    title: "Old ovens and stoves",
                    desc: "Older gas ovens accumulate years of grease. Our commercial-grade degreasers cut through even the toughest build-up.",
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
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Our Full Bond Clean Includes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Full kitchen clean",
                  "Oven deep degreasing",
                  "Heritage tile care",
                  "Bathroom scrub",
                  "Timber floor clean",
                  "Windows inside and out",
                  "Carpet steam clean",
                  "Ceiling roses dusted",
                  "Walls and skirting",
                  "Laundry area",
                  "Courtyard clean",
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
                Book Your Newtown Bond Clean
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
                src="/assets/generated/suburb-newtown.dim_800x500.jpg"
                alt="End of lease cleaning Newtown heritage terrace Inner West Sydney - Tru Bond Cleaning"
                className="rounded-xl shadow-md w-full mb-4"
              />
              <div className="bg-blue-700 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3">Our Guarantees</h3>
                {[
                  "100% Bond Back Guarantee",
                  "Heritage Property Experts",
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
