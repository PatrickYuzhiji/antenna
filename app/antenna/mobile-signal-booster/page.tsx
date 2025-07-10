import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function MobileSignalBooster() {
  const services = [
    {
      title: "Signal Boosters",
      description: "Supply & install 4G/5G mobile signal boosters",
    },
    {
      title: "Coverage Improvement",
      description:
        "Improve mobile reception in homes, offices, and rural areas",
    },
    {
      title: "Network Support",
      description:
        "Signal enhancement for all major networks (Telstra, Optus, Vodafone, etc.)",
    },
    {
      title: "Indoor Signal",
      description:
        "Installation of external antennas & internal repeaters for stronger indoor signals",
    },
    {
      title: "Speed Enhancement",
      description:
        "Boost mobile data speeds for faster calls, streaming, and internet access",
    },
    {
      title: "Commercial Solutions",
      description:
        "Commercial & industrial solutions for warehouses, hospitals, and high-rise buildings",
    },
  ];

  const benefits = [
    {
      title: "Better Coverage",
      description:
        "Eliminate dead zones and weak signal areas in your property",
    },
    {
      title: "Faster Data Speeds",
      description: "Enjoy faster mobile internet and smoother streaming",
    },
    {
      title: "Clearer Calls",
      description: "Crystal clear voice calls without drops or static",
    },
    {
      title: "Multiple Users",
      description: "Support multiple devices and users simultaneously",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mobile Signal Booster Installation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Enhance your mobile coverage with professional signal boosting
            solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Signal Boosting Services
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

          {/* Benefits Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Benefits of Signal Boosters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
