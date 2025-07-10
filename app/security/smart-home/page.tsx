import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function SmartHomeSecurity() {
  const services = [
    {
      title: "Smart Alarm Systems",
      description:
        "Supply & install smart alarms, sensors & security hubs for connected home security",
    },
    {
      title: "Wireless Systems",
      description:
        "Wireless & wired burglar alarm systems with flexible installation options",
    },
    {
      title: "Entry Detection",
      description:
        "Window & door sensors to detect unauthorized entry attempts",
    },
    {
      title: "Mobile Control",
      description:
        "Remote access & control via smartphone apps for monitoring from anywhere",
    },
    {
      title: "Voice Assistant Integration",
      description: "Smart security system integration with Google Home & Alexa",
    },
    {
      title: "Backup Power",
      description:
        "Tamper-proof systems with backup battery support for continuous protection",
    },
  ];

  const integrations = [
    {
      title: "Connected Devices",
      features: [
        "Smart cameras & doorbells",
        "Motion & entry sensors",
        "Smart locks & garage door controls",
        "Lighting & environmental sensors",
      ],
    },
    {
      title: "Control Options",
      features: [
        "Smartphone apps & dashboards",
        "Voice control via Alexa & Google",
        "Scheduled automation routines",
        "Geofencing & presence detection",
      ],
    },
    {
      title: "Response Features",
      features: [
        "Instant mobile notifications",
        "Automated emergency responses",
        "Video verification of alarms",
        "Remote system management",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Home Security Systems
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Intelligent security solutions for the modern connected home.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Smart Security Solutions
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

          {/* Smart Home Integration */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Smart Home Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4">
                    <CheckmarkIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                    {integration.title}
                  </h3>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
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

          {/* Benefits Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
              Benefits of Smart Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl text-[#F39C12] mb-4">
                  <CheckmarkIcon />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                  Enhanced Protection
                </h3>
                <p className="text-gray-600">
                  Comprehensive security with integrated sensors and alerts
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl text-[#F39C12] mb-4">
                  <CheckmarkIcon />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                  Remote Monitoring
                </h3>
                <p className="text-gray-600">
                  Check your home from anywhere with smartphone connectivity
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl text-[#F39C12] mb-4">
                  <CheckmarkIcon />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                  Automation
                </h3>
                <p className="text-gray-600">
                  Create schedules and routines for automated protection
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl text-[#F39C12] mb-4">
                  <CheckmarkIcon />
                </div>
                <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                  Expandable System
                </h3>
                <p className="text-gray-600">
                  Add components as your needs grow and technology advances
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
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
