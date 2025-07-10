import React from "react";

export default function ITServicesSection() {
  // Antenna Services data
  const antennaServices = [
    "Digital TV Antenna Installation",
    "TV Reception Troubleshooting & Signal Boosting",
    "Extra TV Points & Multi-Room Installations",
    "Data Port Installation & NBN Relocation",
    "Mobile Phone Signal Booster Installation",
    "Antenna Repairs & Maintenance",
    "Satellite TV & Pay TV Installation",
    "TV Wall Mounting & Home Theatre Setup",
    "Strata & Commercial Antenna & Data Solutions",
    "Caravan & Motorhome TV, Data & Mobile Signal Boosters",
    "Starlink Installation",
  ];

  // Security Services data
  const securityServices = [
    "CCTV Camera Installation & Monitoring",
    "Smart Home Security Systems",
    "Alarm System Installation & Monitoring",
    "Access Control Systems & Keyless Entry",
    "Video Intercom & Doorbell Systems",
    "Business Security & Surveillance Solutions",
    "Security System Maintenance & Repairs",
    "Wireless Security Solutions",
    "Perimeter Security & Outdoor Surveillance",
    "Security Consultation & Risk Assessment",
  ];

  // IT Support Services data
  const itSupportServices = [
    "Onsite & Remote IT Support",
    "Computer & Laptop Repairs",
    "Business IT Support & Managed Services (MSP)",
    "Networking & WiFi Solutions",
    "NBN Setup, Troubleshooting & Relocation",
    "Cybersecurity & Data Protection",
    "Data Backup & Recovery",
    "Cloud Computing & Storage Solutions",
    "Smart Home & IoT Device Setup",
    "Server Installation & Maintenance",
  ];

  return (
    <section className="bg-[#2C3E50] text-white py-16">
      {/* Antenna Services */}
      <div className="container mx-auto px-4 text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">
          Our Antenna and Data Services
        </h2>
        <p className="max-w-3xl mx-auto mb-12">
          Professional antenna installation and data services for homes and
          businesses. Get crystal-clear TV reception, reliable internet
          connectivity, and expert assistance with all your signal needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4 ">
          {antennaServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center py-3 hover:bg-[#F39C12]/10 rounded-lg transition-colors duration-300"
            >
              <span className="bg-[#F39C12] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                {index + 1}
              </span>
              <span className="text-left text-lg">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dividing Line */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-8">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#F39C12] to-transparent rounded-full"></div>
      </div>

      {/* Security Services */}
      <div className="container mx-auto px-4 text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">
          Security & Surveillance Services
        </h2>
        <p className="max-w-3xl mx-auto mb-12">
          Comprehensive security solutions to protect your home or business. Our
          expert technicians install and maintain modern security systems
          tailored to your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4">
          {securityServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center py-3 hover:bg-[#F39C12]/10 rounded-lg transition-colors duration-300"
            >
              <span className="bg-[#F39C12] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                {index + 1}
              </span>
              <span className="text-left text-lg">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dividing Line */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-8">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#F39C12] to-transparent rounded-full"></div>
      </div>

      {/* IT Support Services */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">IT Support Services</h2>
        <p className="max-w-3xl mx-auto mb-12">
          Professional IT solutions for homes and businesses. Our expert
          technicians ensure your technology runs smoothly, from computer
          repairs to complete network management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4">
          {itSupportServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center py-3 hover:bg-[#F39C12]/10 rounded-lg transition-colors duration-300"
            >
              <span className="bg-[#F39C12] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                {index + 1}
              </span>
              <span className="text-left text-lg">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
