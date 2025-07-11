import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#2C3E50] py-12  mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Home IT Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#F39C12] pb-2 inline-block">
              Antenna | Security | IT Support
            </h3>
            <ul className="space-y-2">
              <li>Digital TV Antenna Installation</li>
              <li>CCTV Camera Installation & Monitoring</li>
              <li>Data Port Installation & NBN Relocation</li>
              <li>Access Control Systems & Keyless Entry</li>
              <li>Computer & Laptop Repairs</li>
              <li>Data Backup & Recovery</li>
              <li>Smart Home & IoT Device Setup</li>
            </ul>
          </div>

          {/* Business IT Solutions */}
          <div></div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#F39C12] pb-2 inline-block">
              Contact Us
            </h3>
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-[#F39C12] text-white rounded-full flex items-center justify-center mr-4">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">1300 000 000</div>
                <div className="text-sm">Call us today</div>
              </div>
            </div>
            <div className="flex justify-start mb-6">
              <Link
                href="/book"
                className="bg-[#F39C12] text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300"
              >
                Request Quote
              </Link>
            </div>
            <div className="space-y-2 mt-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#F39C12]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@example.com.au
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <p className="text-center">
              © {new Date().getFullYear()} IT Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
