import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function ExtraTVPoints() {
  const services = [
    {
      title: "Additional TV Outlets",
      description: "Install additional TV outlets for multiple rooms",
    },
    {
      title: "TV Wall Points",
      description: "Set up TV wall points for bedrooms, living areas & offices",
    },
    {
      title: "Multi-Room Systems",
      description:
        "Multi-room distribution systems for shared antenna connections",
    },
    {
      title: "Professional Cabling",
      description: "Professional cabling & concealed wiring for a clean finish",
    },
  ];

  const benefits = [
    "Watch different channels in different rooms",
    "Flexible furniture arrangement options",
    "Increase your property value",
    "Perfect for entertainment areas and guest rooms",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Extra TV Points & Multi-Room Installations
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expand your TV viewing options with professional TV point
            installations throughout your home.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our TV Point Installation Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div className="mt-12 bg-[#F39C12]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6 text-center">
              Why Add Extra TV Points?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#F39C12] mr-4 mt-1">
                    <CheckmarkIcon />
                  </span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
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
