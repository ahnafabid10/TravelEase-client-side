import React from "react";
import { FaCar, FaLock, FaStar, FaCalendarAlt } from "react-icons/fa";
import img from "../assets/paul-hanaoka-D-qq7W751vs-unsplash.jpg"

const AboutUs = () => {
  return (
    <section className="bg-gray-50  dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
     <h2 className="text-6xl font-bold dark:text-white text-gray-900 mb-4">About TravelEase</h2>
    <p className="text-gray-600 dark:text-gray-300 leading-7 mb-6">TravelEase is a modern vehicle booking and trip management platform designed to help travelers find the perfect ride quickly, securely, and at the best price. From sedans to SUVs to eco-friendly EVs—we make every journey easier.</p>

    <ul className="space-y-4">
            <li className="flex items-start gap-3"><FaCar className="text-gray-600 dark:text-gray-300 text-xl" />
            <p className="text-gray-700 dark:text-gray-300">Wide range of vehicles for every trip</p>
            </li>

            <li className="flex items-start gap-3">
     <FaLock className="text-gray-600 text-xl dark:text-gray-200" /><p className="text-gray-700 dark:text-gray-300">Safe and verified vehicle owners</p>
            </li>

            <li className="flex items-start gap-3">
     <FaCalendarAlt className="text-gray-600 text-xl dark:text-gray-300" /><p className="text-gray-700 dark:text-gray-300">Real-time availability & easy booking</p>
            </li>

            <li className="flex items-start gap-3">
    <FaStar className="text-gray-600 dark:text-gray-200 text-xl" /><p className="text-gray-700 dark:text-gray-300">Trusted by travelers for reliability</p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
 <img src={img} alt="TravelEase" className="w-[500px] rounded-2xl object-cover object-left h-[450px] max-w-md drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
