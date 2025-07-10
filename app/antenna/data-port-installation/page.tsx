import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function DataPortInstallation() {
  const dataPortServices = [
    "Install high-speed data points for home & business networks",
    "Set up Ethernet connections for gaming, streaming & office work",
    "Professional cable management & concealed wiring",
    "Connect smart TVs, security systems, and home automation devices",
  ];

  const nbnServices = [
    "Move your NBN connection box to a more convenient location",
    "Extend or rewire Ethernet cabling for better WiFi coverage",
    "Install network switches & structured cabling for businesses",
    "Troubleshoot slow internet speeds & connection issues",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Port Installation & NBN Relocation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional data point installation and NBN solutions for optimal
            connectivity.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Data Port Services */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">
              Data Port Installation
            </h2>
            <div className="space-y-4">
              {dataPortServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#F39C12] mr-4 mt-1">
                    <CheckmarkIcon />
                  </span>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NBN Services */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">
              NBN Relocation & Cabling
            </h2>
            <div className="space-y-4">
              {nbnServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#F39C12] mr-4 mt-1">
                    <CheckmarkIcon />
                  </span>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
            Benefits of Professional Data Installation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                Faster Speeds
              </h3>
              <p className="text-gray-600">
                Direct wired connections provide faster and more reliable
                internet speeds than WiFi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                Better Reliability
              </h3>
              <p className="text-gray-600">
                Stable, interference-free connections for uninterrupted work and
                entertainment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                Future-Proof
              </h3>
              <p className="text-gray-600">
                High-quality cabling infrastructure ready for future technology
                upgrades.
              </p>
            </div>
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
  );
}
