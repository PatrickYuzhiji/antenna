import Link from "next/link";

export default function HardwareSoftwarePage() {
  return (
    <section className="bg-[#2C3E50] text-white py-16 curve-bottom">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-start md:justify-between mb-16">
            <div className="md:w-2/5 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hardware & Software{" "}
                <span className="text-[#F39C12]">Sales & Upgrades</span>
              </h1>

              <div className="w-24 h-1 bg-[#F39C12] mb-8"></div>

              <p className="text-lg mb-8">
                Quality computer equipment and software solutions tailored to
                your business needs. From individual workstations to complete
                infrastructure upgrades.
              </p>

              <div className="flex gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-2xl font-bold text-[#F39C12]">
                    250+
                  </span>
                  <p className="text-xs mt-1">Satisfied Clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-2xl font-bold text-[#F39C12]">
                    Quality
                  </span>
                  <p className="text-xs mt-1">Assurance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-2xl font-bold text-[#F39C12]">
                    Expert
                  </span>
                  <p className="text-xs mt-1">Installation</p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Link
                  href="/book"
                  className="bg-[#F39C12] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all shadow-lg">
                  <div className="bg-[#F39C12]/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#F39C12]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-4">
                    New & Refurbished Computers
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    High-performance computers and laptops for various business
                    needs and budgets
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Business desktops & workstations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Enterprise-grade laptops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Tested refurbished equipment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all shadow-lg">
                  <div className="bg-[#F39C12]/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#F39C12]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-4">
                    Business IT Infrastructure
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Comprehensive network and server solutions for modern
                    business requirements
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Servers & storage solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Networking equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Power & backup solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all shadow-lg">
                  <div className="bg-[#F39C12]/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#F39C12]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-4">Software Solutions</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Licensed software products and subscription services for
                    improved business efficiency
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Business productivity suites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Security & antivirus solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Industry-specific tools</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#F39C12]/20 to-transparent p-4 rounded-lg mt-6">
                <p className="text-sm font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#F39C12]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All hardware comes with professional installation and
                  technical support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
