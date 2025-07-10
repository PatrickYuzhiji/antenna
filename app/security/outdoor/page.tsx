import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function OutdoorSecurity() {
  const services = [
    {
      title: "Motion Floodlights",
      description:
        "Motion-activated floodlights that illuminate when movement is detected",
    },
    {
      title: "Weatherproof CCTV",
      description:
        "All-weather surveillance cameras resistant to rain, heat, and cold",
    },
    {
      title: "Perimeter Alarms",
      description: "Advanced perimeter detection systems for early warning",
    },
    {
      title: "Garden Lighting",
      description: "Strategic security lighting for pathways and dark areas",
    },
    {
      title: "Gate Automation",
      description:
        "Automated gate systems with remote control and smart access",
    },
    {
      title: "Smart Integration",
      description: "Complete integration with your home security system",
    },
  ];

  // Just one additional content section
  const benefits = [
    "Deters potential intruders before they approach your property",
    "Creates multiple layers of security for comprehensive protection",
    "Weather-resistant technology designed for Australian conditions",
    "Remote monitoring capabilities from your smartphone or device",
    "Automated responses to security threats when you're away",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Outdoor Security Systems
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive outdoor security solutions to protect your property
            perimeter and deter intruders.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Outdoor Security Solutions
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

          {/* Benefits - The only additional content section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Benefits of Outdoor Security
            </h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
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
