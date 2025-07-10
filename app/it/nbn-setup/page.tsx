import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function NbnSetup() {
  const services = [
    {
      title: "NBN Connection",
      description:
        "Complete NBN connection setup and activation for new installations",
    },
    {
      title: "Router Setup",
      description: "NBN-compatible router installation and configuration",
    },
    {
      title: "WiFi Optimization",
      description: "Optimizing your WiFi network for NBN speeds",
    },
    {
      title: "Speed Troubleshooting",
      description: "Diagnosing and fixing slow NBN speeds",
    },
    {
      title: "Device Connection",
      description: "Connecting all your devices to your new NBN network",
    },
    {
      title: "NBN Upgrades",
      description: "Assisting with NBN plan upgrades and technology changes",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NBN Setup & Troubleshooting
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional assistance with NBN installation, setup, and
            optimization for reliable high-speed internet.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our NBN Services
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

          {/* NBN Technology Types */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              NBN Technology Types We Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    FTTP (Fibre to the Premises)
                  </h3>
                  <p className="text-gray-600">
                    The fastest NBN technology with fiber optic cable directly
                    to your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    FTTN (Fibre to the Node)
                  </h3>
                  <p className="text-gray-600">
                    Fiber to a neighborhood node, then copper to your premises.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    FTTC (Fibre to the Curb)
                  </h3>
                  <p className="text-gray-600">
                    Fiber to a telecom pit near your home, then copper for the
                    final connection.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    HFC (Hybrid Fibre Coaxial)
                  </h3>
                  <p className="text-gray-600">
                    Utilizing existing pay TV cables to deliver NBN services.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Fixed Wireless
                  </h3>
                  <p className="text-gray-600">
                    Wireless connection from a transmission tower to an antenna
                    on your property.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Satellite
                  </h3>
                  <p className="text-gray-600">
                    For remote areas, connecting via the Sky Muster satellite
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link
              href="/book"
              className="inline-block bg-[#F39C12] hover:bg-[#0ea371] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Book NBN Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
