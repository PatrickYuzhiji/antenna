import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function StrataCommercial() {
  const services = [
    {
      title: "MATV Systems",
      description: "Master Antenna TV (MATV) systems for apartments & hotels",
    },
    {
      title: "Signal Distribution",
      description:
        "Integrated TV & data signal distribution for offices, hospitals & schools",
    },
    {
      title: "Maintenance Contracts",
      description: "Maintenance contracts for real estate & body corporate",
    },
    {
      title: "System Troubleshooting",
      description: "Large-scale TV reception troubleshooting & system upgrades",
    },
    {
      title: "Data Cabling",
      description: "Business network cabling & data port installations",
    },
  ];

  const solutions = [
    {
      title: "MATV Systems",
      description:
        "Centralized antenna systems delivering quality TV signals to multiple units",
      features: [
        "High-quality digital TV distribution",
        "Scalable for any building size",
        "Future-proof infrastructure",
        "Cost-effective solution",
      ],
    },
    {
      title: "Commercial Integration",
      description: "Complete commercial TV and data solutions for businesses",
      features: [
        "Digital signage support",
        "Multi-room entertainment",
        "IP TV systems",
        "Custom configurations",
      ],
    },
    {
      title: "Maintenance Services",
      description: "Proactive maintenance to prevent signal issues",
      features: [
        "Regular system checks",
        "24/7 emergency support",
        "Performance monitoring",
        "Scheduled maintenance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Strata & Commercial Antenna Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional TV and data solutions for multi-dwelling units and
            commercial properties.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Commercial Services
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

          {/* Solutions Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Commercial Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#F39C12] mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Plans */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
              Commercial Maintenance Plans
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Keep your commercial TV and data systems running at peak
              performance with our customized maintenance plans designed for
              businesses and strata properties.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔄</span> Preventive
                  Maintenance
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Regular system inspections</li>
                  <li>Signal quality monitoring</li>
                  <li>Equipment health checks</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">🚨</span> Emergency Support
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>24/7 emergency response</li>
                  <li>Priority service for businesses</li>
                  <li>Rapid issue resolution</li>
                  <li>Technical phone support</li>
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
