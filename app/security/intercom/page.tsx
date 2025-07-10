import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function VideoIntercom() {
  const services = [
    {
      title: "Smart Doorbells",
      description: "Supply & install smart video doorbells (Ring, Nest, etc.)",
    },
    {
      title: "Video Intercom",
      description:
        "Wired & wireless video intercom systems for homes and businesses",
    },
    {
      title: "Two-Way Audio",
      description:
        "Two-way audio communication for secure visitor verification",
    },
    {
      title: "Night Vision",
      description:
        "High-resolution night vision cameras for clear visuals in all lighting",
    },
    {
      title: "Remote Access",
      description:
        "Remote access & monitoring via mobile app or PC from anywhere",
    },
    {
      title: "Security Integration",
      description: "Integration with CCTV, alarms, and access control systems",
    },
  ];

  // Just one additional content section for a cleaner design
  const benefits = [
    "See and speak with visitors without opening your door",
    "Record and save footage of all visitors",
    "Receive alerts when motion is detected",
    "Answer your door from anywhere using your smartphone",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Video Intercom & Doorbell Systems
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            See, hear, and speak to visitors at your door from anywhere with
            advanced video intercom solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Video Intercom Services
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

          {/* Benefits - This is the only additional content section */}
          <div className="mt-16 bg-[#F39C12]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6 text-center">
              Benefits of Video Intercom Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#F39C12] mr-4 mt-1 text-xl">✓</span>
                  <p className="text-gray-700">{benefit}</p>
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
