import {
  Award,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Leaf,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import type { Page } from "../App";
import { Button } from "../components/ui/button";

interface HomeProps {
  navigate: (page: Page) => void;
}

const faqs = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning or vacate cleaning) is a thorough, top-to-bottom clean of a rental property when a tenant moves out. Your landlord or property manager requires it to make sure the place looks exactly like it did when you moved in — clean and ready for the next tenant. In New South Wales, your lease agreement usually says you must return the property in the same condition you received it (fair wear and tear aside). If you don't clean properly, your landlord can legally keep part or all of your bond money to pay for professional cleaning. A bond clean covers everything — kitchens, bathrooms, bedrooms, living areas, windows, carpets, walls, and more. It's not just a regular tidy-up; it's a deep, detailed clean that meets real estate inspection standards. Getting a professional bond cleaner means you get your money back and avoid disputes with your landlord.",
  },
  {
    q: "Why is Bond Cleaning Important?",
    a: "Bond cleaning is important because your bond deposit (usually 4 weeks rent) is a big chunk of money — in Sydney, that could be $2,000 to $6,000 or more. If the property isn't cleaned to the standard your landlord expects, they can keep some or all of that money. Professional bond cleaning gives you the best chance of getting every dollar back. Tru Bond Cleaning uses the REINSW-approved checklist, which is the same checklist real estate agents use during inspections. This means we don't miss anything. We also offer a free re-clean guarantee — if your agent finds anything we missed, we come back and fix it at no extra cost. Bond cleaning also saves you stress. Moving house is already hard work. Let the professionals handle the cleaning while you focus on settling into your new home.",
  },
  {
    q: "How Much Does a Bond Clean Cost?",
    a: "Bond cleaning prices in Sydney depend on the size of your home and its condition. Here are typical price guides: Studio/1 bedroom: $200–$350 | 2 bedroom apartment: $300–$450 | 3 bedroom house: $400–$600 | 4 bedroom house: $500–$800+. Carpet steam cleaning, pest control, and window cleaning are sometimes priced separately. At Tru Bond Cleaning Sydney, we offer transparent, upfront quotes with no hidden fees. We also give you a fixed price — not an hourly rate — so you always know exactly what you'll pay. Contact us today for a free, obligation-free quote tailored to your property.",
  },
  {
    q: "What is a Full Bond Clean?",
    a: "A full bond clean is a complete, room-by-room deep clean of your entire rental property. It covers every single area that a property manager checks during a final inspection. A full bond clean includes: cleaning inside all kitchen cupboards and drawers, degreasing and scrubbing the oven and stovetop, wiping down all benchtops and splashbacks, cleaning the rangehood filter, scrubbing bathrooms and toilets, removing soap scum and limescale, cleaning all windows inside and out, vacuuming and mopping all floors, steam cleaning carpets, dusting ceiling fans and light fittings, spot-cleaning walls and skirting boards, and cleaning laundry areas. Tru Bond Cleaning follows the real estate industry's standard checklist to make sure nothing gets missed. A full bond clean is not the same as a regular house clean — it's much more detailed and thorough.",
  },
  {
    q: "Top Rated Bond Cleaning Companies Near Me (Sydney)?",
    a: null, // special render
    special: "companies",
  },
  {
    q: "Which Cleaning Products Are Best for Bond Cleaning?",
    a: "Professional bond cleaners use specific products for different surfaces. The best products for bond cleaning include: Kitchen degreasers (like Selleys Sugar Soap or Easy-Off BAM) for ovens, stovetops, and rangehoods; Bathroom cleaners (like Domestos Thick Bleach or HG Bathroom Spray) for toilets, tiles, and showers; Glass cleaners (like Windex or White King Glass Cleaner) for windows and mirrors; Floor cleaners (like Pine O Cleen or Dettol Floor Wipe) for tiles and floorboards; and Microfibre cloths for streak-free surfaces. At Tru Bond Cleaning, we use commercial-grade, eco-friendly products that are tough on grime but safe for kids and pets. We bring everything we need — you don't have to supply anything.",
  },
  {
    q: "How Much Does a Professional Bond Clean Typically Cost?",
    a: "In Sydney, a professional bond clean typically costs between $200 and $800+, depending on property size and condition. Here's a more detailed breakdown: 1 bedroom unit: $200–$320 | 2 bedroom apartment: $300–$450 | 3 bedroom house: $450–$600 | 4 bedroom house: $550–$800 | 5+ bedrooms: $700–$1,200+. Extra services like carpet steam cleaning ($80–$200), pest control ($150–$250), and external window cleaning ($50–$100) are usually priced separately. Tru Bond Cleaning Sydney gives you a fixed, all-inclusive quote so there are no surprises on the day. Call or WhatsApp us on 0488 841 883 for a free quote.",
  },
  {
    q: "What Products Are Best for Bond Cleaning Carpets?",
    a: null,
    special: "carpet-products",
  },
  {
    q: "How to Choose a Reliable Bond Cleaner?",
    a: "Choosing the right bond cleaner can make the difference between getting your full bond back or losing hundreds of dollars. Here's what to look for: 1. Bond Back Guarantee — choose a company that offers a free re-clean if your agent isn't satisfied. 2. REINSW-Approved Checklist — make sure they follow the real estate industry's standard. 3. Fixed Pricing — avoid cleaners who charge by the hour for bond cleans. 4. Insurance — your cleaner should be fully insured in case of any accidental damage. 5. Experience — look for strong reviews and years in the business. 6. Police-Checked Staff — for your peace of mind and safety. 7. Eco-Friendly Products — safe for your family and the environment. Tru Bond Cleaning Sydney ticks every box on this list. We've helped hundreds of Sydney tenants get their full bond back.",
  },
  {
    q: "Can I Book a Bond Cleaning Company Online with a Satisfaction Guarantee?",
    a: "Yes! Booking Tru Bond Cleaning Sydney online is quick and easy. Just fill in our contact form with your property details — address, number of rooms, and your preferred date — and we'll confirm your booking fast. We back every clean with our 100% Bond Back Guarantee. If your property manager or real estate agent finds anything that doesn't meet their standard, we come back and re-clean it for free within 72 hours. No arguments, no extra charges. We want you to get your full bond back, and we stand behind our work. Book online today or WhatsApp us on 0488 841 883.",
  },
  {
    q: "How Much Is a Cleaner Per Hour in Sydney?",
    a: "In Sydney, a professional house cleaner typically charges $35–$60 per hour. This rate varies based on experience, company overheads, and the type of cleaning required. For bond cleaning, most reputable companies (including Tru Bond Cleaning) charge a fixed total price rather than an hourly rate. This is better for you as a tenant because you know the exact cost upfront, and the cleaner is motivated to do a thorough job rather than drag it out. If you need a regular cleaner for ongoing house cleaning, hourly rates are more common. For bond cleaning specifically, always ask for a fixed quote.",
  },
  {
    q: "How Much Is an End of Lease Clean in Australia? How Much to Pay a Cleaner for 3 Hours? What Is the 20 Minute Rule in Cleaning?",
    a: "An end of lease clean in Australia costs anywhere from $150 to $1,500+ depending on property size and location. Sydney prices are generally higher than regional areas. For a typical 2–3 bedroom Sydney apartment, expect to pay $300–$550 for a standard bond clean. Always factor in extras like carpet steam cleaning and window cleaning. How much to pay a cleaner for 3 hours: In Sydney, 3 hours of house cleaning typically costs $105–$180 (at $35–$60/hr). For bond cleaning, a 3-hour session is rarely enough for a full property — most bond cleans take 4–10 hours depending on size. The 20-minute rule in cleaning: The 20-minute rule is a simple cleaning habit — spend just 20 minutes each day tackling one area of your home. By cleaning a little every day, you prevent build-up and keep your home consistently tidy. While this works well for regular maintenance cleaning, bond cleaning requires a full deep clean regardless of how tidy the property is during your tenancy.",
  },
];

const companies = [
  {
    name: "Clean to Perfection",
    url: "https://www.cleantoperfection.com.au",
    desc: "Clean to Perfection is a Sydney-based bond cleaning company known for its thorough end-of-lease services. They offer a detailed checklist that covers every room, carpet steam cleaning, window washing, and oven degreasing. Their team arrives on time and works efficiently to help tenants get their full bond back. They serve most Sydney suburbs and provide a satisfaction guarantee. Many customers praise their attention to detail and professional communication. A solid choice if you need reliable bond cleaning at a fair price.",
  },
  {
    name: "Jim's Cleaning",
    url: "https://www.jimscleaning.com.au",
    desc: "Jim's Cleaning is one of Australia's most recognised cleaning brands. With hundreds of franchisees across Sydney, they offer end of lease cleaning, carpet steam cleaning, and more. Their national backing means consistent standards and accountability. Jim's Cleaning provides a bond back guarantee and follows a comprehensive checklist aligned with real estate standards. Easy online booking, transparent pricing, and a well-known brand make them a popular first choice for many Sydney renters looking for peace of mind.",
  },
  {
    name: "Fantastic Cleaners",
    url: "https://www.fantasticcleaners.com.au",
    desc: "Fantastic Cleaners operates across Sydney offering a wide range of services including end-of-lease cleaning, carpet cleaning, pest control, and handyman services. They use an REINSW-approved checklist and provide a 72-hour guarantee. Their app-based booking system makes it easy to schedule and manage your clean online. Fantastic Cleaners is known for professionalism and a large team that can handle same-day and urgent bookings. A great option if you need multiple services bundled together for your move-out.",
  },
  {
    name: "Bond Cleaning in Sydney",
    url: "https://www.bondcleaninginsydney.com.au",
    desc: "Bond Cleaning in Sydney is a specialist end-of-lease cleaning service focused exclusively on helping tenants get their bonds back. They follow a strict real estate-approved checklist and offer a free re-clean guarantee. Their transparent fixed pricing covers all Sydney suburbs, and they provide same-day availability for urgent cleans. Their cleaners are fully insured and vetted. The company focuses purely on bond cleaning, which means their team has deep expertise in exactly what property managers look for during exit inspections.",
  },
  {
    name: "Tru Bond Cleaning",
    url: "https://trubondcleaningbrisbane.com",
    desc: "Tru Bond Cleaning is a trusted, professional bond cleaning company serving Sydney and surrounding suburbs. We specialise in end-of-lease cleaning that gets results — helping hundreds of tenants get their full bond back every year. Our team follows the REINSW-approved cleaning checklist and we back every job with our 100% Bond Back Guarantee. We offer fixed pricing, eco-friendly products, police-checked cleaners, and free re-cleans if your agent requests it. Booking is easy — call, WhatsApp, or fill in our online form. We're available 7 days a week including weekends.",
    highlight: true,
  },
];

const carpetProducts = [
  {
    name: "Bissell ProHeat 2X Revolution",
    url: "https://shop.bissell.com",
    desc: "Professional-grade carpet cleaner",
  },
  {
    name: "Rug Doctor Carpet Cleaning Solution",
    url: "https://www.bunnings.com.au",
    desc: "Available at Bunnings and Woolworths",
  },
  {
    name: "Preen Carpet Stain Remover",
    url: "https://www.woolworths.com.au",
    desc: "Great for spot-treating stains before steam cleaning",
  },
  {
    name: "Pledge Fabric Sweeper",
    url: "https://www.coles.com.au",
    desc: "For removing pet hair before vacuuming",
  },
  {
    name: "Hoover PowerDash Carpet Cleaner",
    url: "https://www.target.com.au",
    desc: "Available at Target Australia",
  },
];

const services = [
  {
    title: "Bond Cleaning",
    page: "bond-cleaning" as Page,
    desc: "Full end-of-lease clean to REINSW standard. Every room, every surface.",
    img: "/assets/generated/service-bond-cleaning.dim_800x500.jpg",
    alt: "End of lease kitchen cleaning service Sydney - Tru Bond Cleaning",
  },
  {
    title: "Carpet Cleaning",
    page: "carpet-cleaning" as Page,
    desc: "Professional hot water extraction. Removes stains, odours, and deep dirt.",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Sydney - Tru Bond Cleaning",
  },
  {
    title: "Bathroom Cleaning",
    page: "bathroom-cleaning" as Page,
    desc: "Deep scrub of tiles, grout, toilet, shower screen, and vanity.",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Professional bathroom cleaning for bond return Sydney - Tru Bond Cleaning",
  },
  {
    title: "Window Cleaning",
    page: "window-cleaning" as Page,
    desc: "Streak-free glass inside and out. Frames, tracks, and screens included.",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Window cleaning end of lease Sydney - Tru Bond Cleaning",
  },
  {
    title: "Oven Cleaning",
    page: "oven-cleaning" as Page,
    desc: "Deep degrease of oven, stovetop, rangehood filter, and trays.",
    img: "/assets/generated/service-oven-cleaning.dim_800x500.jpg",
    alt: "Deep oven cleaning bond clean Sydney - Tru Bond Cleaning",
  },
  {
    title: "Full House Clean",
    page: "bond-cleaning" as Page,
    desc: "Complete property clean for any size home in any Sydney suburb.",
    img: "/assets/generated/hero-banner.dim_1200x600.jpg",
    alt: "Full house bond cleaning Sydney - Tru Bond Cleaning",
  },
];

export default function Home({ navigate }: HomeProps) {
  useEffect(() => {
    document.title =
      "Bond Cleaning Sydney | 100% Bond Back Guarantee | Tru Bond Cleaning";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Professional bond cleaning in Sydney. REINSW approved checklist, fixed pricing, 100% bond back guarantee. Serving all Sydney suburbs. Call 0488 841 883.",
      );
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1200x600.jpg"
            alt="Professional bond cleaning team in Sydney apartment - Tru Bond Cleaning Sydney"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-6">
              <Award className="w-3 h-3" /> REINSW APPROVED CHECKLIST
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Get Your Full Bond Back —{" "}
              <span className="text-yellow-400">Guaranteed!</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Sydney's Most Trusted Bond Cleaning Service. We clean every corner
              so your landlord says yes. Fixed pricing, no hidden fees, 100%
              satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                data-ocid="hero.primary_button"
                onClick={() => navigate("contact")}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-base px-8"
              >
                Get a Free Quote
              </Button>
              <a
                data-ocid="hero.secondary_button"
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-8 py-2 rounded-md transition-colors"
              >
                <Phone className="w-5 h-5" /> Call / WhatsApp: 0488 841 883
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-blue-600" />,
                text: "100% Bond Back Guarantee",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                text: "REINSW Approved Checklist",
              },
              {
                icon: <Award className="w-6 h-6 text-purple-600" />,
                text: "Police-Checked Cleaners",
              },
              {
                icon: <Leaf className="w-6 h-6 text-emerald-600" />,
                text: "Eco-Friendly Products",
              },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="shrink-0">{badge.icon}</div>
                <span className="text-sm font-semibold text-gray-700">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Bond Cleaning Services in Sydney
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We cover everything your property manager checks. Book one service
              or bundle them all for a great deal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <button
                key={service.page + service.title}
                onClick={() => navigate(service.page)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 text-left"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                  <span className="mt-3 inline-block text-blue-600 text-sm font-semibold">
                    Learn more →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Why Sydney Tenants Choose Tru Bond Cleaning
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Award className="w-5 h-5 text-blue-600" />,
                    title: "10+ Years Experience in Sydney",
                    desc: "We know what Sydney property managers look for. We've done hundreds of successful bond cleans.",
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
                    title: "Fixed Price — No Surprises",
                    desc: "You get a quote upfront. The price doesn't change. No extra charges on the day.",
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-purple-600" />,
                    title: "72-Hour Free Re-Clean Guarantee",
                    desc: "If your agent isn't happy, we come back and fix it for free within 72 hours.",
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-orange-600" />,
                    title: "Available 7 Days a Week",
                    desc: "We work weekends and public holidays. Book your clean when it suits you.",
                  },
                  {
                    icon: <Leaf className="w-5 h-5 text-emerald-600" />,
                    title: "All Sydney Suburbs Covered",
                    desc: "CBD, Northern Beaches, Parramatta, Sutherland, Inner West — we go anywhere.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/team-photo.dim_800x500.jpg"
                alt="Tru Bond Cleaning Sydney professional team"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <img
                  src="/assets/generated/guarantee-badge-transparent.dim_400x400.png"
                  alt="100% Bond Back Guarantee - Tru Bond Cleaning Sydney"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    Bond Back Guarantee
                  </div>
                  <div className="text-xs text-gray-500">
                    Or we re-clean for free
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                suburb: "Bondi Junction",
                text: "Got my full bond back! Absolutely spotless clean. The team was professional, on time, and thorough. Highly recommend Tru Bond Cleaning.",
              },
              {
                name: "James T.",
                suburb: "Parramatta",
                text: "They cleaned our 3-bed apartment in 6 hours. The oven looked brand new. The agent was impressed. Bond returned in full the next day!",
              },
              {
                name: "Priya K.",
                suburb: "Chatswood",
                text: "Booked online, easy process, cleaners were on time and professional. Got my full bond back without any issues. Will use again!",
              },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-4">
                  "{review.text}"
                </p>
                <div className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </div>
                <div className="text-xs text-gray-500">
                  {review.suburb}, Sydney
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Bond Cleaning Prices Sydney
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Transparent, fixed pricing. No hidden fees. No surprises.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                size: "1 Bedroom",
                price: "From $220",
                desc: "Studio or 1-bed unit",
              },
              {
                size: "2 Bedroom",
                price: "From $320",
                desc: "Apartment or house",
              },
              {
                size: "3 Bedroom",
                price: "From $420",
                desc: "House or townhouse",
              },
              { size: "4+ Bedroom", price: "From $550", desc: "Large home" },
            ].map((tier, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                <div className="font-bold text-gray-900 mb-1">{tier.size}</div>
                <div className="text-2xl font-extrabold text-blue-700 mb-1">
                  {tier.price}
                </div>
                <div className="text-xs text-gray-500">{tier.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Carpet cleaning, pest control, and external window cleaning may be
            priced separately.{" "}
            <button
              onClick={() => navigate("contact")}
              className="text-blue-600 underline"
            >
              Get a free quote
            </button>{" "}
            for your exact property.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Frequently Asked Questions About Bond Cleaning Sydney
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Everything you need to know about bond cleaning in Sydney — answered
            simply.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    {faq.special === "companies" ? (
                      <div className="space-y-4">
                        {companies.map((c, ci) => (
                          <div
                            key={ci}
                            className={`p-4 rounded-lg border ${c.highlight ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
                          >
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <span className="font-bold text-gray-900">
                                {ci + 1}. {c.name}
                              </span>
                              <a
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 underline shrink-0"
                              >
                                {c.url
                                  .replace("https://", "")
                                  .replace("http://", "")}
                              </a>
                            </div>
                            <p className="text-sm text-gray-700">{c.desc}</p>
                          </div>
                        ))}
                      </div>
                    ) : faq.special === "carpet-products" ? (
                      <div>
                        <p className="text-sm text-gray-700 mb-4">
                          For carpet cleaning during a bond clean, the best
                          approach is hot water extraction (steam cleaning).
                          Here are the best products and tools:
                        </p>
                        <ul className="space-y-2">
                          {carpetProducts.map((p, pi) => (
                            <li
                              key={pi}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              <span>
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-blue-600 underline"
                                >
                                  {p.name}
                                </a>{" "}
                                — {p.desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-700 mt-4">
                          For best results on a bond clean, professional steam
                          cleaning using a truck-mounted or portable hot water
                          extraction machine is recommended. Tru Bond Cleaning
                          includes professional carpet steam cleaning as part of
                          our comprehensive bond packages.
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Book your professional bond clean today. Fixed price, 100%
            guarantee, available 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("contact")}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-base px-8"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-base px-8 py-2 rounded-md transition-colors border border-white/30"
            >
              WhatsApp: 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
