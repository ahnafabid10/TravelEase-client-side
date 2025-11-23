import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content rounded p-6 md:p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-center md:text-left">TravelEase</h2>

        <p className="text-sm opacity-70 text-center md:text-left">
          © {new Date().getFullYear()} TravelEase — All Rights Reserved.
        </p>

        <div className="flex gap-4 text-xl justify-center md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaX />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
