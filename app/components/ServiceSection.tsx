import React, { ReactNode } from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

interface ServiceSectionProps {
  title: string;
  description: string;
  serviceCategories: {
    title: string;
    icon: ReactNode;
    services: string[];
  }[];
  columns?: number;
  viewAllLink?: string;
}

export default function ServiceSection({
  title,
  description,
  serviceCategories,
  columns = 3,
  viewAllLink,
}: ServiceSectionProps) {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="max-w-3xl mx-auto mb-12">{description}</p>

      {/* Service Categories */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8 mt-12`}
      >
        {serviceCategories.map((category, index) => (
          <ServiceCard
            key={index}
            title={category.title}
            icon={category.icon}
            services={category.services}
          />
        ))}
      </div>

      {viewAllLink && (
        <div className="mt-10">
          <Link
            href={viewAllLink}
            className="bg-[#F39C12] hover:bg-[#0D9668] text-white py-3 px-6 rounded-md font-medium transition duration-300"
          >
            View All Services
          </Link>
        </div>
      )}
    </div>
  );
}
