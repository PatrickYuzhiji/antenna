import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function BusinessSecurity() {
  const services = [
    {
      title: "Complete Systems",
      description:
        "Full-scale security system installations for offices, warehouses & retail stores",
    },
    {
      title: "Multi-Camera Surveillance",
      description:
        "Multi-camera CCTV surveillance networks with 24/7 recording capabilities",
    },
    {
      title: "Employee Monitoring",
      description:
        "Employee monitoring & loss prevention solutions for retail environments",
    },
    {
      title: "LPR Systems",
      description:
        "License Plate Recognition (LPR) cameras for vehicle security and tracking",
    },
    {
      title: "Integrated Solutions",
      description:
        "Integration with alarms, access control & smart security systems",
    },
    {
      title: "Custom Plans",
      description:
        "Customized security plans for large-scale commercial properties",
    },
  ];

  // Just one additional content section for a cleaner design
  const businessTypes = [
    {
      type: "Retail",
      solutions: "Theft prevention, customer monitoring, POS integration",
    },
    {
      type: "Office Buildings",
      solutions: "Access control, visitor management, after-hours security",
    },
    {
      type: "Warehouses",
      solutions:
        "Perimeter security, inventory monitoring, loading dock surveillance",
    },
    {
      type: "Healthcare",
      solutions: "Patient safety, asset tracking, restricted area monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Security & Surveillance Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive security systems designed for commercial environments
            with specialized business needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Business Security Services
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

          {/* Business Types - This is the only additional content section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Industry-Specific Security Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessTypes.map((business, index) => (
                <div key={index} className="bg-[#2C3E50]/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2 text-center">
                    {business.type}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {business.solutions}
                  </p>
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
