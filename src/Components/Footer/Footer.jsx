import React from "react";
import { FaFacebookF, FaInstagram, FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "contactUs" }
  ];

  const services = [
    { name: "Car Rental", href: "#rental" },
    { name: "Airport Transfer", href: "#airport" },
    { name: "Corporate Solutions", href: "#corporate" },
    { name: "Long-term Lease", href: "#lease" },
    { name: "Insurance", href: "#insurance" }
  ];

  const support = [
    { name: "FAQ", href: "faq" },
    { name: "Help Center", href: "#help" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cancellation Policy", href: "#cancellation" }
  ];

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <FaCar className="text-2xl" />
              </div>
              <h2 className="text-3xl font-bold">TravelEase</h2>
            </div>
            <p className="text-base-content/70 mb-6 leading-relaxed max-w-md">
              Your trusted partner for vehicle rentals across Bangladesh. Experience comfort, reliability, and exceptional service for every journey.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-base-content/70">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>123 Main Street, Dhaka 1000, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-base-content/70">
                <FaPhone className="text-primary flex-shrink-0" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3 text-base-content/70">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <span>support@travelease.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-base-100 hover:bg-primary text-base-content hover:text-white p-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-base-100 hover:bg-primary text-base-content hover:text-white p-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="bg-base-100 hover:bg-primary text-base-content hover:text-white p-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-base-content">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-base-content">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-base-content">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-base-content/70 text-center md:text-left">
              © {new Date().getFullYear()} TravelEase. All Rights Reserved. Designed with care for your journey.
            </p>
            <div className="flex gap-6 text-sm text-base-content/70">
              <a href="#terms" className="hover:text-primary transition-colors">Terms</a>
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#cookies" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;