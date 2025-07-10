import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function SatelliteTV() {
  const services = [
    {
      title: "Satellite Dish Installation",
      description:
        "Supply & install satellite dishes for Australian & international channels",
    },
    {
      title: "Foxtel Solutions",
      description: "Foxtel dish installation & relocation",
    },
    {
      title: "VAST Setup",
      description: "VAST satellite TV setup for rural & remote areas",
    },
    {
      title: "Commercial Solutions",
      description:
        "Commercial satellite solutions for hotels, apartments & businesses",
    },
    {
      title: "Dish Alignment",
      description: "Satellite dish realignment for optimal signal reception",
    },
  ];

  const benefits = [
    {
      title: "Greater Channel Choice",
      description: "Access to hundreds of local and international channels",
    },
    {
      title: "Rural Coverage",
      description:
        "Perfect solution for areas with poor terrestrial TV reception",
    },
    {
      title: "HD Quality",
      description: "Crystal clear high-definition content",
    },
    {
      title: "Weather Resistant",
      description:
        "Professional installation to withstand Australian conditions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Satellite TV & Pay TV Installation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional satellite dish installation for premium TV
            entertainment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Satellite TV Services
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
              Benefits of Satellite TV
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

          {/* VAST Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">
              VAST Satellite TV for Rural Areas
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              The Viewer Access Satellite Television (VAST) provides free-to-air
              digital TV to Australian homes and communities who are unable to
              receive terrestrial digital TV broadcasts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F39C12]/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">👥</span> Who Needs VAST?
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Remote and rural properties</li>
                  <li>Areas with poor digital TV reception</li>
                  <li>Travelers and grey nomads</li>
                  <li>Remote communities</li>
                </ul>
              </div>
              <div className="bg-[#F39C12]/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center">
                  <span className="text-2xl mr-3">🛠️</span> What We Provide
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Complete VAST system installation</li>
                  <li>Satellite dish alignment</li>
                  <li>Set-top box setup and programming</li>
                  <li>Technical support and maintenance</li>
                </ul>
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
