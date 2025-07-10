import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function NetworkingWifi() {
  const services = [
    {
      title: "WiFi Installation",
      description:
        "Professional WiFi network installation with optimal coverage planning",
    },
    {
      title: "Network Setup",
      description: "Complete home & office network setup & configuration",
    },
    {
      title: "WiFi Troubleshooting",
      description: "Resolving WiFi dead spots, speed issues & connection drops",
    },
    {
      title: "Mesh Networks",
      description: "Modern mesh WiFi systems for seamless whole-home coverage",
    },
    {
      title: "Network Security",
      description: "Securing your network against unauthorized access",
    },
    {
      title: "Business Networks",
      description: "Commercial-grade networking solutions for businesses",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Networking & WiFi Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional networking services to keep your home and business
            connected with reliable, secure, high-speed internet.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Networking & WiFi Services
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

          {/* WiFi Solutions Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Common WiFi Problems We Solve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Poor Signal Coverage
                  </h3>
                  <p className="text-gray-600">
                    We identify and eliminate WiFi dead zones with strategic
                    access point placement and range extenders.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Slow Connection Speeds
                  </h3>
                  <p className="text-gray-600">
                    Our technicians diagnose and fix bottlenecks causing slow
                    WiFi performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Frequent Disconnections
                  </h3>
                  <p className="text-gray-600">
                    We resolve issues causing intermittent connections and
                    annoying dropouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#F39C12] text-xl font-bold mr-4">
                  <CheckmarkIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                    Interference Problems
                  </h3>
                  <p className="text-gray-600">
                    Our experts identify and mitigate sources of WiFi
                    interference affecting your network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link
              href="/book"
              className="inline-block bg-[#F39C12] hover:bg-[#0ea371] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
