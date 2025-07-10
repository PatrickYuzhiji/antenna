export default function WhyChooseUs() {
  return (
    <section className="py-16 curve-bottom bg-white">
      <div className="container mx-auto px-4">
        {/* Header with subtle accent */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2C3E50] relative inline-block">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We combine technical expertise with exceptional customer service to
            deliver reliable IT solutions
          </p>
        </div>

        {/* Main Content - Left-Right Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/it-support.webp"
                alt="IT Support Van"
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#2C3E50]/60 via-[#2C3E50]/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2 space-y-8">
            {/* Top Row - Three Features */}
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F39C12]/20 hover:-translate-y-1 transition-all duration-300 h-[170px]">
                <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <h4 className="text-sm font-bold mb-2 text-[#2C3E50]">
                  SAME-DAY SERVICE
                </h4>
                <p className="text-xs text-gray-600">
                  Same-Day Service Available
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F39C12]/20 hover:-translate-y-1 transition-all duration-300 h-[170px]">
                <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold mb-2 text-[#2C3E50]">
                  FREE QUOTES
                </h4>
                <p className="text-xs text-gray-600">
                  No obligation IT assessments
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F39C12]/20 hover:-translate-y-1 transition-all duration-300 h-[170px]">
                <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold mb-2 text-[#2C3E50]">
                  FIXED PRICING
                </h4>
                <p className="text-xs text-gray-600">Transparent pricing</p>
              </div>
            </div>

            {/* Bottom Row - Three Features */}
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F39C12]/20 hover:-translate-y-1 transition-all duration-300 h-[170px]">
                <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold mb-2 text-[#2C3E50]">
                  EXPERIENCED TECHNICIANS
                </h4>
                <p className="text-xs text-gray-600">Professional & insured</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F39C12]/20 hover:-translate-y-1 transition-all duration-300 h-[170px]">
                <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold mb-2 text-[#2C3E50]">
                  100% SATISFACTION
                </h4>
                <p className="text-xs text-gray-600">Fully resolved issues</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#F39C12]/20 hover:-translate-y-1 transition-all duration-300 h-[170px]">
                <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-xl mb-4 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-bold mb-2 text-[#2C3E50]">
                  WIDE RANGE OF SERVICES
                </h4>
                <p className="text-xs text-gray-600">
                  Comprehensive IT solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
