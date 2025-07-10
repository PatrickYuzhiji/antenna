import React from "react";

export default function ContactHero() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Header with Red Accent */}
          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              <span className="text-[#2C3E50]">Contact</span>{" "}
              <span className="text-[#F39C12]">IT Support</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#F39C12] mb-3">
                  Address:
                </h3>
                <p className="text-gray-800 text-lg">48 Edinburgh Rd</p>
                <p className="text-gray-800 text-lg">Mooroolbark 3138</p>
                <p className="text-gray-800 text-lg">Victoria Australia</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#F39C12] mb-3">
                  Phone:
                </h3>
                <p className="text-gray-800 text-lg">000 000</p>
                <p className="text-gray-800 text-lg">Mo-Fr: 7:00-22:00</p>
                <p className="text-gray-800 text-lg">Sa: 8:00-18:00</p>
                <p className="text-gray-800 text-lg">Su: 8:00-18:00</p>
              </div>
            </div>

            {/* Map */}
            <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096386!2d145.3119368!3d-37.7813082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6310daaaaaaaa%3A0xaaaaaaaa!2s48%20Edinburgh%20Rd%2C%20Mooroolbark%20VIC%203138!5e0!3m2!1sen!2sau!4v1648082662091!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Dark Background */}
      <div className="py-20 mt-16 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">WE&apos;D LOVE TO</h2>
          <h2 className="text-4xl font-bold text-[#F39C12] mb-10">
            HEAR FROM YOU!
          </h2>

          <p className="max-w-3xl mx-auto mb-6 text-lg font-semibold">
            ONCE WE HAVE RECEIVED YOUR QUERY OR FEEDBACK,
          </p>
          <p className="max-w-3xl mx-auto mb-12 text-lg font-semibold">
            A MEMBER OF OUR TEAM IS GOING TO BE IN TOUCH WITH YOU.
          </p>

          <div className="flex justify-center">
            <button className="bg-[#F39C12] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
