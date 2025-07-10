import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function SecurityMaintenance() {
  const services = [
    {
      title: "CCTV Maintenance",
      description:
        "CCTV camera maintenance & firmware updates to ensure optimal performance",
    },
    {
      title: "Alarm Troubleshooting",
      description: "Alarm system troubleshooting & false alarm fixes",
    },
    {
      title: "Component Replacement",
      description:
        "Replacement of faulty sensors, cameras, or access control units",
    },
    {
      title: "Battery Replacement",
      description: "Battery replacements for alarm backup systems",
    },
    {
      title: "System Upgrades",
      description: "Upgrading outdated security systems to modern technology",
    },
    {
      title: "Health Checks",
      description: "System health checks to ensure 24/7 protection",
    },
  ];

  // Just one additional content section for a cleaner design
  const maintenancePlans = [
    {
      title: "Essential",
      features: [
        "Annual system check",
        "Software updates",
        "Basic troubleshooting",
        "Technical support",
      ],
    },
    {
      title: "Standard",
      features: [
        "Quarterly system check",
        "Regular firmware updates",
        "Battery replacements",
        "Priority technical support",
      ],
    },
    {
      title: "Premium",
      features: [
        "Monthly system check",
        "Emergency call-out service",
        "Component replacements",
        "24/7 technical support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security System Maintenance & Repairs
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Keep your security systems running at peak performance with our
            professional maintenance services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Maintenance & Repair Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  <CheckmarkIcon />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Maintenance Plans - This is the only additional content section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Maintenance Plan Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenancePlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-[#2C3E50]/5 p-6 rounded-lg border border-[#F39C12]/20"
                >
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 text-center">
                    {plan.title} Plan
                  </h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#F39C12] mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link
              href="/book"
              className="inline-block bg-[#F39C12] hover:bg-[#0ea371] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
