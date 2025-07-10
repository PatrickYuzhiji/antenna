import Link from "next/link";

export default function OnDemandSupportPage() {
  return (
    <section className="bg-[#2C3E50] text-white py-16 curve-bottom">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-start md:justify-between mb-16">
            <div className="md:w-2/5 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                On-Demand Support &{" "}
                <span className="text-[#F39C12]">Emergency IT Repairs</span>
              </h1>

              <div className="w-24 h-1 bg-[#F39C12] mb-8"></div>

              <p className="text-lg mb-8">
                Immediate IT support when you need it most. Get expert help for
                urgent technical issues with our responsive IT repair services.
              </p>

              <div className="flex gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-2xl font-bold text-[#F39C12]">1hr</span>
                  <p className="text-xs mt-1">Response Time</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-2xl font-bold text-[#F39C12]">
                    24/7
                  </span>
                  <p className="text-xs mt-1">Support</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <span className="text-2xl font-bold text-[#F39C12]">95%</span>
                  <p className="text-xs mt-1">Issue Resolution</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link
                  href="/book"
                  className="bg-[#F39C12] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Emergency Support
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-4">
                    Same-Day Onsite Support
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Urgent IT help at your location. Our technicians arrive
                    quickly to diagnose and resolve critical issues.
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Fast response for critical issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Hardware repairs and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Data recovery from failed devices</span>
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-4">
                    Remote Troubleshooting
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get immediate support without waiting for onsite visits. Our
                    experts can solve many issues remotely.
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Immediate connection to technicians</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Software configuration and repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Quick diagnostic and resolution</span>
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-4">
                    Weekend & After-Hours Support
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    IT emergencies don&apos;t follow business hours. Get support
                    when you need it, even outside standard hours.
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Evening and weekend availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>Priority scheduling for emergencies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F39C12] mr-2">•</span>
                      <span>24/7 critical issue response</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F39C12]/10 p-6 rounded-lg mt-8">
                <h3 className="font-bold text-xl mb-4">
                  Common Emergency Issues We Solve
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
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
                    System crashes & blue screens
                  </li>
                  <li className="flex items-center">
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
                    Virus & malware infections
                  </li>
                  <li className="flex items-center">
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
                    Network & internet outages
                  </li>
                  <li className="flex items-center">
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
                    Email & cloud access issues
                  </li>
                  <li className="flex items-center">
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
                    Data loss & recovery needs
                  </li>
                  <li className="flex items-center">
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
                    Hardware failures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
