import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function StarlinkInstallation() {
  const services = [
    {
      title: "Dish Mounting",
      description: "Professional setup and mounting of Starlink dish",
    },
    {
      title: "Cable Management",
      description: "Neat cable routing and indoor connection",
    },
    {
      title: "Signal Optimization",
      description: "Signal testing and integration with home network",
    },
    {
      title: "Rural Solutions",
      description: "Ideal for rural or low-coverage areas",
    },
    {
      title: "Complete Setup",
      description: "Full configuration of modem and Wi-Fi network",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Starlink Installation Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional Starlink satellite internet installation for reliable,
            high-speed connectivity anywhere in Australia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Starlink Installation Services
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

          <div className="mt-12 bg-[#F39C12]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">
              What We Offer at IT Tech
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">
                  Mounting the satellite dish on roof or pole
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">
                  Running cables neatly into your home or office
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">
                  Configuring your modem and Wi-Fi
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-[#F39C12] mr-3">✓</span>
                <p className="text-gray-700">
                  Optimising signal for best performance
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Whether you&apos;re switching from slow NBN or need reliable
              internet off-grid, we&apos;ll make sure your Starlink setup is
              done right the first time.
            </p>
            <p className="text-lg text-gray-700">
              Our technicians are experienced with Starlink installations in all
              types of settings, from remote rural properties to suburban homes
              looking for better internet options.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/book"
              className="inline-block bg-[#F39C12] hover:bg-[#2C3E50] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
