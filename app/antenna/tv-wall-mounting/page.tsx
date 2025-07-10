import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function TVWallMounting() {
  const services = [
    {
      title: "Secure Mounting",
      description: "Secure TV wall mounting (flat, tilt, or swivel brackets)",
    },
    {
      title: "Hidden Cables",
      description: "Concealed cabling for a clean, professional look",
    },
    {
      title: "Home Theatre",
      description:
        "Home theatre system installation (soundbars, speakers, projectors)",
    },
    {
      title: "Smart Setup",
      description: "Smart TV setup with Netflix, YouTube, and streaming apps",
    },
    {
      title: "Expert Advice",
      description: "Professional advice on best viewing angles & placement",
    },
  ];

  const mountingTypes = [
    {
      title: "Fixed Mount",
      description:
        "Sleek, low-profile mounting ideal for optimal viewing height",
    },
    {
      title: "Tilt Mount",
      description:
        "Adjustable angle to reduce glare and improve viewing comfort",
    },
    {
      title: "Full-Motion Mount",
      description: "Maximum flexibility with extend, swivel, and tilt options",
    },
    {
      title: "Corner Mount",
      description:
        "Specialized solutions for corner placement and unique spaces",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TV Wall Mounting & Home Theatre Setup
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional TV mounting and home entertainment system installation
            services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Installation Services
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

          {/* Mounting Types */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              TV Mounting Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mountingTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Home Theatre Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
              Complete Home Theatre Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F39C12]/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔊</span> Audio Installation
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Soundbar mounting and setup</li>
                  <li>Surround sound speaker installation</li>
                  <li>Audio calibration and testing</li>
                  <li>Wireless audio system configuration</li>
                </ul>
              </div>
              <div className="bg-[#F39C12]/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">📲</span> Smart Integration
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Smart TV setup and configuration</li>
                  <li>Streaming service installation</li>
                  <li>Universal remote programming</li>
                  <li>Home automation integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link
              href="/book"
              className="inline-block bg-[#F39C12] hover:bg-[#0ea371] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Request Quotes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
