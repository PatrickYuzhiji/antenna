import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function CaravanMotorhome() {
  const services = [
    {
      title: "Portable TV Antennas",
      description: "Installation & tuning of portable TV antennas",
    },
    {
      title: "Satellite Systems",
      description: "Satellite dish setup for travel-friendly TV reception",
    },
    {
      title: "Mobile TV Solutions",
      description:
        "Signal boosters & mobile TV solutions for on-the-go entertainment",
    },
    {
      title: "Internet Connectivity",
      description: "4G/5G & Starlink installation for mobile internet access",
    },
    {
      title: "Mobile Signal Boosting",
      description: "Mobile signal boosters for better coverage while traveling",
    },
  ];

  const solutions = [
    {
      title: "TV Reception",
      features: [
        "Portable digital TV antennas",
        "Automatic satellite systems",
        "Multi-directional antennas",
        "Signal strength meters",
      ],
    },
    {
      title: "Internet Connectivity",
      features: [
        "4G/5G mobile broadband",
        "Starlink satellite internet",
        "WiFi range extenders",
        "Dual SIM solutions",
      ],
    },
    {
      title: "Mobile Coverage",
      features: [
        "Vehicle signal boosters",
        "External antenna mounting",
        "Multi-carrier support",
        "Coverage area extension",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Caravan & Motorhome TV, Data & Mobile Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Stay connected and entertained on the road with our mobile
            connectivity solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Mobile Solutions
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

          {/* Solutions Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Mobile Entertainment & Connectivity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                    {solution.title}
                  </h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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
