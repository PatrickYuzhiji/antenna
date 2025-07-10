import React from "react";
import Link from "next/link";
import { CheckmarkIcon } from "../../components/Icons";

export default function ComputerLaptopRepairs() {
  const services = [
    {
      title: "Hardware Repairs",
      description:
        "Repair of PC & laptop hardware components including screens & keyboards",
    },
    {
      title: "System Optimization",
      description: "Speed optimization & performance tuning for slow computers",
    },
    {
      title: "Virus Removal",
      description: "Complete virus & malware removal and system cleaning",
    },
    {
      title: "OS Installation",
      description: "Operating system installation & upgrades for all devices",
    },
    {
      title: "Data Recovery",
      description: "Recovery of lost or deleted files from damaged devices",
    },
    {
      title: "Hardware Upgrades",
      description: "Memory, storage & component upgrades to boost performance",
    },
  ];

  // Additional content section - common repair issues
  const commonRepairs = [
    {
      issue: "Blue Screen Errors",
      solution: "Diagnosing and fixing crashes and system failures",
    },
    {
      issue: "Slow Performance",
      solution: "Addressing the many causes of computer slowdowns",
    },
    {
      issue: "Overheating Issues",
      solution: "Cleaning dust buildup and replacing faulty cooling components",
    },
    {
      issue: "Battery Problems",
      solution: "Replacing worn-out batteries and addressing charging issues",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Computer & Laptop Repairs
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert repair and maintenance services for all your PC and laptop
            issues, from hardware failures to software problems.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Our Computer Repair Services
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

          {/* Common Repair Issues Section */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 text-center">
              Common Computer Problems We Fix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonRepairs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-[#F39C12] transition-colors duration-300"
                >
                  <div className="text-4xl mr-4 pt-1">
                    <CheckmarkIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                      {item.issue}
                    </h3>
                    <p className="text-gray-600">{item.solution}</p>
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
              Book a Repair
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
