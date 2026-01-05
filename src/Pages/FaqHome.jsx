import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";

const MiniFAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How do I book a car?",
      a: "Simply browse vehicles, select your car, choose your date and confirm booking online.",
    },
    {
      q: "Is a driving license required?",
      a: "Yes, a valid driving license and national ID or passport is required to rent a vehicle.",
    },
    {
      q: "Is insurance included?",
      a: "Yes, all rentals include basic insurance. You can upgrade to premium coverage if needed.",
    },
    {
      q: "Can I cancel my booking?",
      a: "Yes, you can cancel or modify your booking up to 24 hours before pickup time.",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaQuestionCircle className="text-5xl text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Quick FAQs
          </h2>
          <p className="text-base-content/70 mt-2">
            Find quick answers to common questions
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl shadow-md overflow-hidden border border-base-300"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left hover:bg-base-200 transition"
              >
                <span>{faq.q}</span>
                <FaChevronDown
                  className={`text-primary transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  open === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-base-content/70">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-base-content/70 mb-4">
            Still have questions?
          </p>
          <Link to={'/FAQ'} className="btn bg-primary text-white hover:bg-primary/90 px-8">
            Visit Full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniFAQ;
