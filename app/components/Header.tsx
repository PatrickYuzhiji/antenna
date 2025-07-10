import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Header/Navigation */}
      <header role="banner" className=" text-black">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              aria-label=" Aussie Tech Masters - Home"
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={50}
                className="h-auto w-auto"
                priority={true}
              />
            </Link>

            {/* Navigation and Contact Info Container */}
            <div className="flex flex-col items-end space-y-2">
              {/* Contact Information */}
              <div
                className="flex items-center space-x-6 text-sm"
                role="contentinfo"
              >
                <a
                  href="tel:1300269162"
                  className="flex items-center hover:text-[#F39C12] transition-colors"
                  aria-label="Call us at 1300 269 162"
                >
                  <FaPhone className="mr-2" aria-hidden="true" />
                  <span>1300 269 162</span>
                </a>
                <a
                  href="mailto:info@aussietechmasters.com.au"
                  className="flex items-center hover:text-[#F39C12] transition-colors"
                  aria-label="Email us at info@aussietechmasters.com.au"
                >
                  <FaEnvelope className="mr-2" aria-hidden="true" />
                  <span>info@aussietechmasters.com.au</span>
                </a>
                <Link
                  href="/book"
                  className="bg-[#F39C12] hover:bg-[#0ea371] text-black px-4 py-2 rounded-md font-medium transition-colors duration-300"
                  aria-label="Request a free quote for IT services"
                >
                  Request Free Quote
                </Link>
              </div>

              {/* Main Navigation */}
              <nav
                className="hidden md:flex items-center space-x-10"
                role="navigation"
                aria-label="Main navigation"
              >
                {/* Antenna Services Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center hover:text-[#F39C12] cursor-pointer py-2"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Antenna Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Antenna Services Dropdown Menu */}
                  <div
                    className="absolute z-50 left-[-1rem] top-full mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    role="menu"
                    aria-label="Antenna services submenu"
                  >
                    <div className="h-2 bg-transparent"></div>
                    <div className="bg-white shadow-lg rounded overflow-hidden">
                      <div className="py-1">
                        <Link
                          href="/antenna/digital-tv-installation"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Digital TV Antenna Installation
                        </Link>
                        <Link
                          href="/antenna/tv-reception-troubleshooting"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          TV Reception & Signal Boosting
                        </Link>
                        <Link
                          href="/antenna/extra-tv-points"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Extra TV Points & Multi-Room
                        </Link>
                        <Link
                          href="/antenna/data-port-installation"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Data Port Installation & NBN
                        </Link>
                        <Link
                          href="/antenna/mobile-signal-booster"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Mobile Signal Booster Installation
                        </Link>
                        <Link
                          href="/antenna/repairs-maintenance"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Antenna Repairs & Maintenance
                        </Link>
                        <Link
                          href="/antenna/satellite-tv"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Satellite TV & Pay TV Installation
                        </Link>
                        <Link
                          href="/antenna/tv-wall-mounting"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          TV Wall Mounting & Home Theatre
                        </Link>
                        <Link
                          href="/antenna/strata-commercial"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Strata & Commercial Solutions
                        </Link>
                        <Link
                          href="/antenna/caravan-motorhome"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Caravan & Motorhome Solutions
                        </Link>
                        <Link
                          href="/antenna/starlink-installation"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Starlink Satellite Internet Installation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Services Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center hover:text-[#F39C12] cursor-pointer py-2"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Security Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Security Services Dropdown Menu */}
                  <div
                    className="absolute z-50 left-[-1rem] top-full mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    role="menu"
                    aria-label="Security services submenu"
                  >
                    <div className="h-2 bg-transparent"></div>
                    <div className="bg-white shadow-lg rounded overflow-hidden">
                      <div className="py-1">
                        <Link
                          href="/security/cctv"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          CCTV Camera Installation & Monitoring
                        </Link>
                        <Link
                          href="/security/smart-home"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Smart Home Security Systems
                        </Link>
                        <Link
                          href="/security/alarm-systems"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Alarm System Installation & Monitoring
                        </Link>
                        <Link
                          href="/security/access-control"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Access Control Systems & Keyless Entry
                        </Link>
                        <Link
                          href="/security/intercom"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Video Intercom & Doorbell Systems
                        </Link>
                        <Link
                          href="/security/business"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Business Security & Surveillance Solutions
                        </Link>
                        <Link
                          href="/security/maintenance"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Security System Maintenance & Repairs
                        </Link>

                        <Link
                          href="/security/perimeter"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Perimeter Security & Outdoor Surveillance
                        </Link>
                        <Link
                          href="/security/wireless"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Wireless Security Solutions
                        </Link>
                        <Link
                          href="/security/consultation"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Security Consultation & Risk Assessment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IT Support Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center hover:text-[#F39C12] cursor-pointer py-2"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    IT Support
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* IT Support Dropdown Menu */}
                  <div
                    className="absolute z-50 left-[-1rem] top-full mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    role="menu"
                    aria-label="IT support submenu"
                  >
                    <div className="h-2 bg-transparent"></div>
                    <div className="bg-white shadow-lg rounded overflow-hidden">
                      <div className="py-1">
                        <Link
                          href="/it/onsite-remote-support"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Onsite & Remote IT Support
                        </Link>
                        <Link
                          href="/it/computer-laptop-repairs"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Computer & Laptop Repairs
                        </Link>
                        <Link
                          href="/it/business-it-support"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Business IT Support & Managed Services
                        </Link>
                        <Link
                          href="/it/networking-wifi"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Networking & WiFi Solutions
                        </Link>
                        <Link
                          href="/it/nbn-setup"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          NBN Setup, Troubleshooting & Relocation
                        </Link>
                        <Link
                          href="/it/cybersecurity"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Cybersecurity & Data Protection
                        </Link>
                        <Link
                          href="/it/data-backup-recovery"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Data Backup & Recovery
                        </Link>
                        <Link
                          href="/it/cloud-computing"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Cloud Computing & Storage Solutions
                        </Link>
                        <Link
                          href="/it/smart-home"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Smart Home & IoT Device Setup
                        </Link>
                        <Link
                          href="/it/server-installation"
                          className="block px-4 py-3 text-[#2C3E50] hover:bg-gray-100"
                          role="menuitem"
                        >
                          Server Installation & Maintenance
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About and Blog Links */}
                <Link
                  href="/about"
                  className="flex items-center hover:text-[#F39C12] py-2"
                  aria-label="Learn more about Aussietech IT Support"
                >
                  About Us
                </Link>

                <Link
                  href="/blog"
                  className="flex items-center hover:text-[#F39C12] py-2"
                  aria-label="Read our IT support blog"
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className="w-full h-5 bg-gradient-to-r from-[#2C3E50] via-[#F39C12] to-[#2C3E50]"
        aria-hidden="true"
      ></div>
    </>
  );
}
