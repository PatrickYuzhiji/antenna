import React, { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  services: string[];
}

export default function ServiceCard({
  title,
  icon,
  services,
}: ServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="text-left space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-[#F39C12] mr-2 mt-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
