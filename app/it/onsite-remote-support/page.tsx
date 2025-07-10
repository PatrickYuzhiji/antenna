import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function OnsiteRemoteSupport() {
  const services = [
    {
      title: "On-Demand Support",
      description:
        "On-demand onsite & remote troubleshooting for PCs, Macs & servers",
    },
    {
      title: "Software Issues",
      description: "Fixing software issues, crashes, & performance slowdowns",
    },
    {
      title: "Virus Removal",
      description: "Virus & malware removal to protect your data",
    },
    {
      title: "Device Setup",
      description:
        "Setting up & configuring printers, scanners, and peripherals",
    },
    {
      title: "Remote Support",
      description: "Remote desktop support for quick fixes & IT assistance",
    },
    {
      title: "OS Installations",
      description: "Operating system installations, upgrades & updates",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Onsite & Remote IT Support
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional tech support when and where you need it - at your
            premises or via secure remote connection.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our IT Support Services
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

          {/* Onsite vs Remote Support Comparison */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Onsite vs. Remote Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#2C3E50]/5 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4 text-center">
                  Onsite Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Best for hardware issues requiring physical access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Multiple device setups or network installations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Training sessions for staff
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Complete system overhauls
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#2C3E50]/5 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4 text-center">
                  Remote Support
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Faster response for urgent software issues
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Cost-effective with no travel charges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Ideal for quick fixes and diagnostics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F39C12] text-xl mr-3">•</span>
                    <span className="text-gray-700">
                      Software installations and updates
                    </span>
                  </li>
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
