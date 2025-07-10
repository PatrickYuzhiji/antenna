import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function AlarmSystems() {
  const services = [
    {
      title: "Home & Business Alarms",
      description: "Home & business alarm system installation",
    },
    {
      title: "Intruder Alarms",
      description: "Wired & wireless intruder alarm systems",
    },
    {
      title: "24/7 Monitoring",
      description: "Monitored alarm systems with 24/7 emergency response",
    },
    {
      title: "Custom Solutions",
      description:
        "Custom alarm solutions for houses, apartments, offices, and warehouses",
    },
    {
      title: "Integrated Systems",
      description: "Integration with CCTV & access control systems",
    },
    {
      title: "Pet-Friendly Motion",
      description: "Pet-friendly motion detectors to reduce false alarms",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Alarm System Installation & Monitoring
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive security alarm solutions to protect your property,
            assets, and loved ones around the clock.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Alarm System Services
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
