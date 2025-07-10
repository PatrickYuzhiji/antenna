import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function DataBackupRecovery() {
  const services = [
    {
      title: "Cloud Backup",
      description:
        "Secure cloud backup solutions for automatic data protection",
    },
    {
      title: "Local Backup",
      description:
        "On-premises backup systems for fast access to backed-up data",
    },
    {
      title: "Data Recovery",
      description: "Professional data recovery from failed drives & devices",
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive disaster recovery planning & implementation",
    },
    {
      title: "Business Continuity",
      description: "Solutions to keep your business running during data issues",
    },
    {
      title: "Backup Monitoring",
      description: "Proactive monitoring of backup systems for reliability",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Backup & Recovery Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Protect your valuable data with professional backup solutions and
            expert data recovery services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Data Protection Services
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

          {/* 3-2-1 Backup Strategy */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              The 3-2-1 Backup Strategy We Implement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#2C3E50]/5 rounded-lg">
                <div className="text-5xl font-bold text-[#2C3E50] mb-4">3</div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                  Copies of Data
                </h3>
                <p className="text-gray-600">
                  We ensure you have at least three copies of your important
                  data at all times.
                </p>
              </div>

              <div className="text-center p-6 bg-[#2C3E50]/5 rounded-lg">
                <div className="text-5xl font-bold text-[#2C3E50] mb-4">2</div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                  Different Media Types
                </h3>
                <p className="text-gray-600">
                  Store your backups on at least two different types of storage
                  media to protect against media failure.
                </p>
              </div>

              <div className="text-center p-6 bg-[#2C3E50]/5 rounded-lg">
                <div className="text-5xl font-bold text-[#2C3E50] mb-4">1</div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                  Off-Site Copy
                </h3>
                <p className="text-gray-600">
                  At least one copy of your data should be stored off-site to
                  protect against local disasters.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link
              href="/book"
              className="inline-block bg-[#F39C12] hover:bg-[#0ea371] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Secure Your Data Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
