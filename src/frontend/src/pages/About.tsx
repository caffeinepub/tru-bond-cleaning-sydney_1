import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title =
      "About Tru Bond Cleaning Sydney | Professional Bond Cleaners";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Learn about Tru Bond Cleaning Sydney. Police-checked cleaners, REINSW-approved checklist, eco-friendly products. Helping Sydney tenants get their bond back since day one.",
      );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            About Tru Bond Cleaning Sydney
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tru Bond Cleaning Sydney started with one simple goal — to help
            Sydney tenants get their full bond back without stress. We know how
            stressful moving house is. The last thing you need is to spend hours
            scrubbing floors and ovens when you've got boxes to pack and a new
            home to set up. That's where we come in.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our team has years of experience in professional bond cleaning
            across Sydney. We know what property managers look for, and we know
            how to deliver a clean that passes inspections. We use the
            REINSW-approved checklist — the same checklist your real estate
            agent uses.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every member of our team is police-checked, fully insured, and
            trained to our high standards. We bring all our own equipment and
            eco-friendly, commercial-grade cleaning products. You don't need to
            supply anything. We serve all Sydney suburbs — from the CBD to the
            Northern Beaches, from Parramatta to Sutherland. We're available 7
            days a week, including weekends and public holidays.
          </p>
          <div className="space-y-3">
            {[
              "100% Bond Back Guarantee on every job",
              "REINSW-approved cleaning checklist",
              "Police-checked and fully insured team",
              "Eco-friendly, commercial-grade products",
              "Fixed pricing — no hidden fees",
              "Available 7 days, all Sydney suburbs",
              "Free re-clean within 72 hours if needed",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="/assets/generated/team-photo.dim_800x500.jpg"
            alt="Tru Bond Cleaning Sydney professional team"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
