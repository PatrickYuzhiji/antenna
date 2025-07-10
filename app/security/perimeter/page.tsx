import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function PerimeterSecurity() {
  const services = [
    {
      title: "Security Lighting",
      description: "Installation of motion-activated security lighting",
    },
    {
      title: "Thermal Cameras",
      description: "Thermal & infrared outdoor surveillance cameras",
    },
    {
      title: "Smart Fencing",
      description: "Smart fencing security systems with alarms",
    },
    {
      title: "Outdoor Sensors",
      description:
        "Outdoor sensors to detect intruders before they reach the building",
    },
    {
      title: "Security Integration",
      description: "Integration with CCTV, alarms, and smart home security",
    },
    {
      title: "Deterrent Systems",
      description: "Visual and audio deterrents to discourage intruders",
    },
  ];

  // One additional content section - security layers
  const securityLayers = [
    {
      title: "Outer Perimeter",
      description:
        "Property boundaries with fencing, gate controls, and early detection sensors",
    },
    {
      title: "Approach Detection",
      description:
        "Motion sensors, smart lighting, and surveillance cameras to monitor approaches",
    },
    {
      title: "Building Protection",
      description:
        "Door/window sensors, glass break detectors, and entry point monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Perimeter Security & Outdoor Surveillance
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Detect and deter intruders before they reach your building with
            advanced perimeter protection.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Perimeter Security Solutions
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

          {/* Security Layers - The only additional content section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Layered Security Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityLayers.map((layer, index) => (
                <div
                  key={index}
                  className="bg-[#2C3E50]/5 p-6 rounded-lg border border-[#F39C12]/20"
                >
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-3 text-center">
                    {layer.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {layer.description}
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
