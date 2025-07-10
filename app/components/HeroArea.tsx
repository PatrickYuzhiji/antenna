"use client";

import { useState } from "react";
import Link from "next/link";
export default function HeroArea() {
  const [openArea, setOpenArea] = useState<string | null>("Brisbane");

  const areas = [
    "Brisbane",
    "Logan",
    "Moreton Bay",
    "Ipswich",
    "Redland Bay",
    "Gold Coast",
  ];

  return (
    <section className="bg-[#2C3E50] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Service Areas</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Providing expert IT support and computer repair services across
              South East Queensland. Our mobile technicians bring professional
              solutions directly to your location.
            </p>
          </div>

          {/* Service Areas Accordion */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="space-y-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    className={`w-full px-6 py-4 text-left flex justify-between items-center transition-all duration-300 ${
                      openArea === area
                        ? "bg-[#F39C12] text-white"
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                    onClick={() => setOpenArea(openArea === area ? null : area)}
                  >
                    <span className="text-lg font-medium flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {area}
                    </span>
                    <span
                      className="text-2xl transform transition-transform duration-300"
                      style={{
                        transform:
                          openArea === area ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {openArea === area && (
                    <div className="px-6 py-4 bg-white/5 backdrop-blur-sm">
                      <p className="text-white/90 mb-4">
                        We provide comprehensive IT support and computer repair
                        services in {area} and surrounding suburbs. Our mobile
                        technicians are ready to come to your location for
                        convenient onsite service.
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Link
                          href="/book"
                          className="bg-[#F39C12] hover:bg-[#F39C12]/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-[#F39C12] to-[#059669] rounded-lg p-8 shadow-xl transform hover:scale-[1.02] transition-transform">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Not in these areas?</h2>
              <p className="text-lg mb-2">
                Contact us to check if we can service your location. We&apos;re
                continuously expanding our service areas to help more customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
