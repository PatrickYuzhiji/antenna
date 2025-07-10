import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function SmartHome() {
  const services = [
    {
      title: "Smart Home Setup",
      description: "Smart home automation & IoT integration",
    },
    {
      title: "Voice Control",
      description: "Google Home & Alexa setup for voice control",
    },
    {
      title: "Security Cameras",
      description: "Security camera & smart doorbell installation",
    },
    {
      title: "Smart Devices",
      description: "Connecting smart lights, thermostats, & sensors",
    },
    {
      title: "Home Entertainment",
      description: "Home entertainment systems & multi-room audio setup",
    },
    {
      title: "Smart Control",
      description: "Smartphone and tablet control for all smart devices",
    },
  ];

  // Additional content - popular smart home ecosystems
  const smartEcosystems = [
    {
      name: "Google Home",
      description:
        "Voice-controlled assistant with strong integration with Google services and wide device compatibility",
      features: [
        "Voice commands via Google Assistant",
        "Controls thousands of smart devices",
        "Integrates with Google services",
        "Available in various speaker sizes",
      ],
    },
    {
      name: "Amazon Alexa",
      description:
        "Powerful voice assistant platform with the largest selection of compatible devices and skills",
      features: [
        "Thousands of 'skills' and integrations",
        "Wide range of Echo devices",
        "Shopping and media capabilities",
        "Advanced routines and automation",
      ],
    },
    {
      name: "Apple HomeKit",
      description:
        "Premium ecosystem with focus on security, privacy, and seamless integration with Apple devices",
      features: [
        "Strong encryption and privacy",
        "Simple setup with Apple devices",
        "Siri voice control",
        "Home app dashboard",
      ],
    },
    {
      name: "Samsung SmartThings",
      description:
        "Versatile platform that bridges multiple protocols and offers comprehensive automation capabilities",
      features: [
        "Works with multiple protocols",
        "Extensive device compatibility",
        "Advanced automation rules",
        "Mobile app control",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Home & IoT Device Setup
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Transform your home with intelligent automation and integrated smart
            devices for convenience, security, and efficiency.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Smart Home Services
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

          {/* Smart Home Ecosystems Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Popular Smart Home Ecosystems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {smartEcosystems.map((ecosystem, index) => (
                <div
                  key={index}
                  className="bg-[#2C3E50]/5 p-6 rounded-lg hover:bg-[#2C3E50]/10 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">
                    {ecosystem.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{ecosystem.description}</p>
                  <div>
                    <h4 className="font-medium text-[#F39C12] mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {ecosystem.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#F39C12] mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
