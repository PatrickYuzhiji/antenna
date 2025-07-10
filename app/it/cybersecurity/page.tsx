import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function Cybersecurity() {
  const services = [
    {
      title: "Security Assessments",
      description:
        "Comprehensive evaluation of your network & system security posture",
    },
    {
      title: "Endpoint Protection",
      description:
        "Professional security solutions for computers, servers & mobile devices",
    },
    {
      title: "Email Security",
      description:
        "Advanced email filtering to prevent phishing & malware attacks",
    },
    {
      title: "Network Security",
      description:
        "Firewall setup & monitoring to protect against unauthorized access",
    },
    {
      title: "Password Management",
      description:
        "Implementing robust password policies & management solutions",
    },
    {
      title: "Security Training",
      description: "Staff training to recognize & prevent security threats",
    },
  ];

  const commonThreats = [
    {
      title: "Phishing Attacks",
      description:
        "Deceptive emails & messages designed to steal sensitive information",
    },
    {
      title: "Ransomware",
      description:
        "Malicious software that encrypts your data & demands payment for recovery",
    },
    {
      title: "Data Breaches",
      description: "Unauthorized access to your personal or business data",
    },
    {
      title: "Weak Passwords",
      description: "Easy-to-guess passwords that compromise account security",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Protecting your digital assets with comprehensive security services
            tailored to your needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Cybersecurity Services
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

          {/* Common Cyber Threats */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Common Cyber Threats We Protect Against
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonThreats.map((threat, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#F39C12] text-xl font-bold mr-4">
                    <CheckmarkIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                      {threat.title}
                    </h3>
                    <p className="text-gray-600">{threat.description}</p>
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
              Schedule Security Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
