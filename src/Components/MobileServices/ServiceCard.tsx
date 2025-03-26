import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Service } from "./Services.ts";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={service.link}
      className="block bg-[#f5f5f7] rounded-[3rem] h-[230px] w-full sm:w-[220px] mx-auto flex flex-col items-center justify-between py-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>

      <button className="bg-[#0dc7ae] text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 text-sm hover:bg-[#0bb19b] transition-colors">
        Learn More
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </Link>
  );
}
