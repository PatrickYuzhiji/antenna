import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function DigitalTVInstallation() {
  const services = [
    {
      title: "Digital Antenna Installation",
      description: "Supply & install high-quality digital TV antennas",
    },
    {
      title: "Channel Setup",
      description: "Setup & tune antennas for free-to-air TV channels",
    },
    {
      title: "Flexible Installation",
      description: "Indoor & outdoor antenna installations",
    },
    {
      title: "Custom Mounting",
      description: "Custom mounting for rooftops, walls, and poles",
    },
    {
      title: "Weather Protection",
      description: "Weatherproofing to protect against harsh conditions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digital TV Antenna Installation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional antenna installation services for crystal-clear digital
            TV reception in your home or business.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Digital TV Installation Services
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

          <div className="mt-12 bg-[#F39C12]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">
              Why Choose Professional Installation?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">
                  Optimal signal reception guaranteed
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">
                  Expert positioning and alignment
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">Safe and secure installation</p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">Full warranty coverage</p>
              </div>
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
