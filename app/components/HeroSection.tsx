import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  const images = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
    "/images/home5.jpg",
  ];

  return (
    <section className="bg-[#2C3E50] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Reliable Antenna, Security & IT Support Solutions
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#F39C12] font-medium">
              Servicing Wollongong!
            </h2>

            <p className="max-w-2xl mx-auto lg:mx-0 mb-8 text-lg">
              Professional installation and support services for all your
              antenna, security, and IT needs. Our expert technicians deliver
              high-quality, reliable solutions right where you need them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/book"
                className="bg-[#F39C12] text-center hover:bg-[#F39C12]/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="group/carousel">
            <ImageCarousel images={images} />
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              href: "/antenna/digital-tv-installation",
              title: "Antenna Services",
              description:
                "Digital TV installation, extra TV points, signal boosting & more",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              ),
            },
            {
              href: "/security/cctv",
              title: "Security Services",
              description:
                "CCTV, alarms, access control & complete security solutions",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              ),
            },
            {
              href: "/it/onsite-remote-support",
              title: "IT Support",
              description:
                "Computer repairs, networking, data recovery & business IT solutions",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              ),
            },
          ].map((service) => (
            <Link key={service.href} href={service.href} className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col hover:bg-white/20 transition-all hover:shadow-lg border border-white/20">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#F39C12]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
