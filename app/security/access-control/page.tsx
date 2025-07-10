import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function AccessControl() {
  const services = [
    {
      title: "Keyless Entry",
      description: "Keyless RFID & PIN-based entry systems",
    },
    {
      title: "Biometric Access",
      description:
        "Biometric access control (fingerprint & facial recognition)",
    },
    {
      title: "Card/Fob Systems",
      description: "Card/fob-based access control for businesses & offices",
    },
    {
      title: "Smart Locks",
      description: "Smart locks & remote door access via mobile apps",
    },
    {
      title: "Gate Automation",
      description: "Installation & maintenance of gate automation systems",
    },
    {
      title: "Multi-User Access",
      description:
        "Multi-user access for residential buildings & commercial spaces",
    },
  ];

  // Additional content - access control benefits
  const accessBenefits = [
    {
      title: "Enhanced Security",
      description:
        "Prevent unauthorized access with modern authentication methods and detailed access logs",
    },
    {
      title: "Convenience",
      description:
        "No more lost keys or lockouts with keyless entry methods that are always with you",
    },
    {
      title: "Flexible Access Control",
      description:
        "Grant temporary access to visitors or contractors and revoke it instantly when no longer needed",
    },
    {
      title: "User Management",
      description:
        "Easily add or remove users, set access schedules, and restrict access to specific areas",
    },
    {
      title: "Integration Options",
      description:
        "Connect with alarms, CCTV, and building management systems for comprehensive security",
    },
    {
      title: "Activity Monitoring",
      description:
        "Track and report on all entry/exit events with detailed timestamps and user identification",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Access Control Systems & Keyless Entry
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Modern secure entry solutions that eliminate traditional keys while
            providing advanced security and convenience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Access Control Services
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

          {/* Access Control Benefits Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Benefits of Modern Access Control
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-[#2C3E50]/5 rounded-lg"
                >
                  <div className="text-4xl mr-4 pt-1">
                    <CheckmarkIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
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
