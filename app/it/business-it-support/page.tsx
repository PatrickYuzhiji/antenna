import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function BusinessITSupport() {
  const services = [
    {
      title: "Managed IT Services",
      description:
        "Comprehensive IT management & support for businesses of all sizes",
    },
    {
      title: "Help Desk Support",
      description: "Responsive help desk solutions for your team's IT needs",
    },
    {
      title: "Network Management",
      description:
        "Professional management of your business network infrastructure",
    },
    {
      title: "Security Solutions",
      description: "Advanced security protocols to protect your business data",
    },
    {
      title: "Cloud Services",
      description: "Cloud migration, management & optimization solutions",
    },
    {
      title: "Business Continuity",
      description: "Disaster recovery & business continuity planning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business IT Support
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Reliable IT support and solutions tailored to your business needs,
            helping you stay productive and competitive.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Business IT Services
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
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Benefits of Our IT Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Reduced Downtime
                  </h3>
                  <p className="text-gray-600">
                    Proactive monitoring and maintenance to minimize business
                    disruptions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Predictable Costs
                  </h3>
                  <p className="text-gray-600">
                    Fixed monthly fees with no surprise expenses for budgeting
                    ease.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Enhanced Security
                  </h3>
                  <p className="text-gray-600">
                    Latest security practices to protect your valuable business
                    data.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600">
                    Strategic IT planning and consulting for long-term business
                    growth.
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
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
