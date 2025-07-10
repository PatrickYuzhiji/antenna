import {
  FaToolbox,
  FaShieldAlt,
  FaLaptop,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function HeroAbout() {
  return (
    <section className="bg-[#2C3E50] text-white">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/90 to-[#2C3E50]/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-10 z-0"></div>

        <div className="container mx-auto px-4 py-12 relative z-20">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Us – Aussie Tech Masters
            </h1>
            <p className="text-xl md:text-2xl text-[#F39C12] font-semibold mb-6">
              Smart Solutions. Local Service. Reliable Results.
            </p>
            <p className="text-lg leading-relaxed">
              At Aussie Tech Masters, we&apos;re more than just technicians —
              we&apos;re your local tech partners, proudly helping homes and
              businesses across South East Queensland stay connected, secure,
              and supported.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Our Background */}
          <div className="mb-12 bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#F39C12]/30 transition-all">
            <p className="text-lg leading-relaxed">
              With a strong background in antenna services, security and
              surveillance systems, and IT support, our team brings together the
              best of technical expertise and real-world experience. Whether you
              need a new TV antenna, a customised CCTV setup, or a full network
              solution for your office, we deliver fast, affordable, and
              professional service — every time.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <FaToolbox className="text-[#F39C12] mr-3" />
              What We Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#F39C12]/30 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#F39C12]">
                  Antenna Installation & Repairs
                </h3>
                <p className="text-gray-300">
                  From digital antenna setups to signal troubleshooting, we
                  ensure crystal-clear reception.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#F39C12]/30 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#F39C12]">
                  Security & CCTV Systems
                </h3>
                <p className="text-gray-300">
                  Wired or wireless, we install smart, reliable surveillance
                  systems for homes and businesses.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#F39C12]/30 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#F39C12]">
                  IT Support & Networking
                </h3>
                <p className="text-gray-300">
                  Onsite and remote IT help, NBN relocation, Wi-Fi optimisation,
                  and small business tech support.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#F39C12]/30 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#F39C12]">
                  Mobile Signal Boosters
                </h3>
                <p className="text-gray-300">
                  Improve phone reception indoors with industry-approved signal
                  booster systems.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Are Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <FaShieldAlt className="text-[#F39C12] mr-3" />
              Who We Are
            </h2>

            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
              <p className="text-lg leading-relaxed mb-6">
                We&apos;re a passionate team of licensed professionals who take
                pride in quality workmanship and friendly service. Backed by
                hands-on experience and trusted technology, we work closely with
                our clients to offer tailored solutions that actually work — not
                one-size-fits-all fixes.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in doing the job right the first time, showing up
                when we say we will, and offering support long after the job is
                done.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <FaLaptop className="text-[#F39C12] mr-3" />
              Why Choose Aussie Tech Masters?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-6xl">
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 flex items-center">
                <span className="text-[#F39C12] text-xl mr-3 flex-shrink-0">
                  ✅
                </span>
                <p className="text-sm sm:text-base">Locally Owned & Operated</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 flex items-center">
                <span className="text-[#F39C12] text-xl mr-3 flex-shrink-0">
                  ✅
                </span>
                <p className="text-sm sm:text-base">Prompt, Friendly Service</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 flex items-center">
                <span className="text-[#F39C12] text-xl mr-3 flex-shrink-0">
                  ✅
                </span>
                <p className="text-sm sm:text-base">Fully Licensed & Insured</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 flex items-center">
                <span className="text-[#F39C12] text-xl mr-3 flex-shrink-0">
                  ✅
                </span>
                <p className="text-sm sm:text-base">Up-to-date Technology</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 flex items-center col-span-1 sm:col-span-2 md:col-span-1">
                <span className="text-[#F39C12] text-xl mr-3 flex-shrink-0">
                  ✅
                </span>
                <p className="text-sm sm:text-base">
                  No Jargon – Just Honest Advice
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <p className="text-lg leading-relaxed">
                Whether you&apos;re moving into a new home, upgrading your tech
                setup, or needing expert support for your business, Aussie Tech
                Masters is here to help you make it simple and stress-free.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-[#F39C12] rounded-xl p-8 shadow-xl transform hover:scale-[1.01] transition-transform mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-2xl mr-3" />
                  <p className="text-lg font-semibold">
                    Servicing Brisbane, Gold Coast, Ipswich, Redland
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-2xl mr-3" />
                  <p className="text-lg font-semibold">
                    Call us today to book a job or get a free quote!
                  </p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <a
                  href="/book"
                  className="inline-block bg-white text-[#2C3E50] font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-4 backdrop-blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
