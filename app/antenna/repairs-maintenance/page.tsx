import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function AntennaRepairsMaintenance() {
  const services = [
    {
      title: "Repair & Replace",
      description: "Repair or replace damaged antennas, cables & connectors",
    },
    {
      title: "Antenna Upgrades",
      description:
        "Upgrade outdated analog antennas to modern digital antennas",
    },
    {
      title: "Mounting Repair",
      description: "Fixing corroded or broken mounting brackets",
    },
    {
      title: "Storm Damage",
      description: "Storm damage repairs and secure reinstallation",
    },
    {
      title: "Ongoing Maintenance",
      description:
        "Ongoing maintenance for commercial & residential properties",
    },
  ];

  const commonIssues = [
    {
      title: "Poor Reception",
      description: "Pixelated picture, signal dropouts, or missing channels",
    },
    {
      title: "Physical Damage",
      description: "Storm damage, corrosion, or loose connections",
    },
    {
      title: "Outdated Equipment",
      description: "Old antennas not compatible with digital signals",
    },
    {
      title: "Interference",
      description: "4G/5G interference affecting TV reception",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Antenna Repairs & Maintenance
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert antenna repair and maintenance services to keep your TV
            reception crystal clear.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Repair & Maintenance Services
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

          {/* Common Issues Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Common Antenna Issues We Fix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commonIssues.map((issue, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                    {issue.title}
                  </h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Plans */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
              Preventive Maintenance Plans
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Regular maintenance can prevent reception issues and extend the
              life of your antenna system. We offer customized maintenance plans
              for both residential and commercial properties.
            </p>
            <div className="text-center">
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
    </div>
  );
}
