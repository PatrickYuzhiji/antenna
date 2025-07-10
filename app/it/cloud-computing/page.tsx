import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function CloudComputing() {
  const services = [
    {
      title: "Cloud Migration",
      description:
        "Seamless migration of your data & applications to the cloud",
    },
    {
      title: "Microsoft 365",
      description:
        "Setup & management of Microsoft 365 for business productivity",
    },
    {
      title: "Google Workspace",
      description: "Implementation & support for Google Workspace solutions",
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud storage solutions with reliable backups",
    },
    {
      title: "Cloud Security",
      description: "Advanced security for your cloud-based data & applications",
    },
    {
      title: "Hybrid Cloud",
      description:
        "Hybrid cloud solutions combining on-premises & cloud resources",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cloud Computing Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Flexible, scalable cloud services that enhance productivity and
            reduce IT costs for your business.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Cloud Services
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

          {/* Cloud Benefits Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Benefits of Cloud Computing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Cost Efficiency
                  </h3>
                  <p className="text-gray-600">
                    Reduce capital expenses by eliminating the need for physical
                    hardware and infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Scalability
                  </h3>
                  <p className="text-gray-600">
                    Easily scale resources up or down based on your business
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Remote Accessibility
                  </h3>
                  <p className="text-gray-600">
                    Access your data and applications from anywhere with an
                    internet connection.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Business Continuity
                  </h3>
                  <p className="text-gray-600">
                    Enhanced disaster recovery capabilities and reduced downtime
                    risks.
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
              Discuss Your Cloud Strategy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
