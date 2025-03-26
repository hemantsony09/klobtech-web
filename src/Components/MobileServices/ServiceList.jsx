import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./Services";

export default function ServiceList() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Our <span className="text-[#0dc7ae]">services</span> include
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-2">
          but are not limited to
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          Have something else in your mind?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Reach out to us.
        </p>
        <Link to="/contact">
          <button className="bg-[#0dc7ae] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-base hover:bg-[#0bb19b] transition-colors mx-auto">
            Click me
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
