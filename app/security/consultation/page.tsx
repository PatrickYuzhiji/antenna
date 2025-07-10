import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function SecurityConsultation() {
  const services = [
    {
      title: "Site Assessment",
      description:
        "Free site assessments to determine security vulnerabilities",
    },
    {
      title: "Custom Solutions",
      description:
        "Custom security solutions based on property size & risk level",
    },
    {
      title: "System Recommendations",
      description: "Recommendations for CCTV, alarms & access control systems",
    },
    {
      title: "Security Upgrades",
      description:
        "Security upgrades for homes, businesses & high-risk locations",
    },
    {
      title: "Risk Analysis",
      description: "Comprehensive security risk analysis and reporting",
    },
    {
      title: "Ongoing Support",
      description: "Continued security assessment as your needs evolve",
    },
  ];

  // One additional content section - assessment process
  const assessmentProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We discuss your security concerns and specific requirements",
    },
    {
      step: 2,
      title: "Site Inspection",
      description:
        "Our experts thoroughly assess your property and identify vulnerabilities",
    },
    {
      step: 3,
      title: "Risk Analysis",
      description: "We analyze potential security threats and their likelihood",
    },
    {
      step: 4,
      title: "Solutions Presentation",
      description: "We present tailored security recommendations and options",
    },
    {
      step: 5,
      title: "Implementation",
      description: "Professional installation of approved security measures",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security Consultation & Risk Assessment
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert analysis of your security needs with personalized
            recommendations for optimal protection.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Consultation Services
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

          {/* Assessment Process - The only additional content section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Our Assessment Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {assessmentProcess.map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#2C3E50] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </div>
                ))}
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
