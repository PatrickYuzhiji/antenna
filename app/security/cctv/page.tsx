import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function CCTVPage() {
  const services = [
    {
      title: "HD & 4K Cameras",
      description: "Professional high-definition & 4K security cameras",
    },
    {
      title: "Complete Installation",
      description: "Full CCTV system installation, setup, and configuration",
    },
    {
      title: "Indoor & Outdoor",
      description: "Weatherproof outdoor and discreet indoor solutions",
    },
    {
      title: "Remote Viewing",
      description:
        "App and browser access to monitor your property from anywhere",
    },
    {
      title: "AI & Smart Features",
      description: "Motion detection, facial recognition & smart alerting",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CCTV Camera Installation & Monitoring
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional security camera systems for crystal-clear surveillance
            and peace of mind.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our CCTV Installation Services
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

          {/* Benefits Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
              Benefits of Professional CCTV Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F39C12]/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔐</span> Enhanced Security
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Deter potential intruders</li>
                  <li>Monitor your property 24/7</li>
                  <li>Record evidence in case of incidents</li>
                  <li>Reduce the risk of theft and vandalism</li>
                </ul>
              </div>
              <div className="bg-[#F39C12]/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">📲</span> Remote Monitoring
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>View live footage from anywhere</li>
                  <li>Receive instant motion alerts</li>
                  <li>Check in on your home or business remotely</li>
                  <li>Control cameras through mobile apps</li>
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
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
