import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function TVReceptionTroubleshooting() {
  const services = [
    {
      title: "Signal Quality Issues",
      description: "Fixing pixelation, dropouts, and static",
    },
    {
      title: "Antenna Alignment",
      description: "Antenna realignment to improve signal strength",
    },
    {
      title: "Signal Amplification",
      description: "Installation of TV signal boosters & amplifiers",
    },
    {
      title: "Interference Protection",
      description: "Filtering out 4G/5G interference",
    },
    {
      title: "Connection Repair",
      description: "Diagnosing and fixing cabling and connection issues",
    },
  ];

  const commonIssues = [
    {
      title: "Poor Picture Quality",
      symptoms: ["Pixelation", "Freezing", "Black screens"],
    },
    {
      title: "Channel Loss",
      symptoms: [
        "Missing channels",
        "Intermittent reception",
        "Channel scanning issues",
      ],
    },
    {
      title: "Weather Impact",
      symptoms: ["Rain fade", "Wind interference", "Storm damage"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TV Reception Troubleshooting & Signal Boosting
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert solutions for all your TV reception issues, ensuring crystal
            clear viewing experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Professional TV Reception Solutions
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

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Common Reception Issues We Fix
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {commonIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="bg-[#2C3E50]/5 p-6 rounded-lg border border-[#2C3E50]/10"
                  >
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                      {issue.title}
                    </h3>
                    <ul className="space-y-2">
                      {issue.symptoms.map((symptom, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <span className="text-[#F39C12] mr-2">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
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
