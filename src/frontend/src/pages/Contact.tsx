import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { createActorWithConfig } from "../config";

export default function Contact() {
  useEffect(() => {
    document.title =
      "Contact Tru Bond Cleaning Sydney | Free Quote | Book Online";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Book your bond clean in Sydney today. Get a free quote, ask questions, or book online. Available 7 days 7am-8pm. Call or WhatsApp 0488 841 883.",
      );
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Bond Cleaning");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const backend = await createActorWithConfig();
      await backend.submitEnquiry(name, email, phone, service, message);
      const subject = encodeURIComponent(
        `New Bond Cleaning Enquiry from ${name}`,
      );
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      );
      window.location.href = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setService("Bond Cleaning");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get a Free Bond Cleaning Quote
        </h1>
        <p className="text-lg text-gray-600">
          Fill in the form below and we'll get back to you fast. Or contact us
          directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {status === "success" && (
            <div
              data-ocid="contact.success_state"
              className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
            >
              <p className="text-green-800 font-semibold">
                Thanks! Your enquiry has been sent. We'll be in touch shortly.
              </p>
              <p className="text-green-700 text-sm mt-1">
                Your email app may have opened to send the message — please send
                it to complete your booking.
              </p>
            </div>
          )}
          {status === "error" && (
            <div
              data-ocid="contact.error_state"
              className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
            >
              <p className="text-red-800 font-semibold">
                Something went wrong. Please WhatsApp us directly on 0488 841
                883.
              </p>
            </div>
          )}

          <form
            data-ocid="contact.form"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                id="contact-name"
                data-ocid="contact.name.input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Johnson"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <input
                id="contact-email"
                data-ocid="contact.email.input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                id="contact-phone"
                data-ocid="contact.phone.input"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="04xx xxx xxx"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="contact-service"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Service Required
              </label>
              <select
                id="contact-service"
                data-ocid="contact.service.select"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Bond Cleaning</option>
                <option>Carpet Cleaning</option>
                <option>Bathroom Cleaning</option>
                <option>Window Cleaning</option>
                <option>Oven Cleaning</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Message / Property Details *
              </label>
              <textarea
                id="contact-message"
                data-ocid="contact.message.textarea"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell us your property address, number of bedrooms, move-out date, and any special requests."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
            <Button
              data-ocid="contact.submit_button"
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 text-base"
            >
              {status === "loading" ? "Sending..." : "Send My Enquiry"}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              By submitting, your email app will open to send the enquiry. Your
              email stays private.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-4">
              Contact Us Directly
            </h2>
            <div className="space-y-4">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-700 font-semibold hover:underline"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp: 0488 841 883
              </a>
              <a
                href="tel:0488841883"
                className="flex items-center gap-3 text-blue-700 font-semibold hover:underline"
              >
                <Phone className="w-5 h-5" /> Phone: 0488 841 883
              </a>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-gray-500" /> 7 days a week, 7am –
                8pm
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-500" /> All Sydney suburbs
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-3">What Happens Next?</h3>
            <ol className="space-y-3">
              {[
                "Fill in the form above and submit",
                "We confirm your booking within 1 hour",
                "Our team arrives on your scheduled date",
                "We clean every corner to REINSW standard",
                "You pass your inspection and get your bond back!",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 bg-blue-700 text-white rounded-full text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-900 mb-2">
              100% Bond Back Guarantee
            </h3>
            <p className="text-sm text-yellow-800">
              If your agent isn't satisfied with any part of our clean, we come
              back and fix it for free within 72 hours. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
