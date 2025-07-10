import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function WirelessSecurity() {
  const services = [
    {
      title: "Wireless CCTV",
      description: "Setup of wireless CCTV & alarm systems",
    },
    {
      title: "WiFi Security",
      description: "Secure WiFi-based security camera connections",
    },
    {
      title: "Long-Range",
      description:
        "Long-range wireless cameras for remote areas & large properties",
    },
    {
      title: "Mobile Security",
      description: "Mobile security solutions for temporary sites & events",
    },
    {
      title: "Wireless Alarms",
      description: "Advanced wireless alarm systems with remote notifications",
    },
    {
      title: "Cellular Backup",
      description: "Cellular backup systems for continuous protection",
    },
  ];

  // One additional content section - key benefits
  const benefits = [
    "No cables required - cleaner installation with minimal disruption",
    "Flexible positioning of cameras and sensors without wiring constraints",
    "Easy to relocate and expand as your security needs change",
    "Remote access and control via smartphone apps",
    "Battery backup options for continued operation during power outages",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wireless Security Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Modern cable-free security systems for flexible, reliable protection
            without the mess.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Wireless Security Services
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

          {/* Benefits Section - The only additional content */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Benefits of Wireless Security
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
