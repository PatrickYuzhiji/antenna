"use client";
import React from "react";
import { useState } from "react";

export default function BookHero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    location: "",
    suburb: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    details: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    type: "", // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);

      // Show success notification
      setNotification({
        show: true,
        type: "success",
        message:
          "Quote request submitted successfully! We will contact you shortly.",
      });

      // Clear form data after successful submission
      setFormData({
        serviceType: "",
        location: "",
        suburb: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        details: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error notification
      setNotification({
        show: true,
        type: "error",
        message:
          "Failed to submit. Please check if you forgot to choose the service type",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Notification Component */}
          {notification.show && (
            <div
              className={`fixed top-5 right-5 z-50 p-6 rounded-lg shadow-xl max-w-xl transition-all duration-300 ${
                notification.type === "success"
                  ? "bg-[#F39C12] text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.type === "success" ? (
                    <svg
                      className="h-8 w-8"
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
                  ) : (
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
                <div className="ml-6">
                  <p className="text-base font-medium">
                    {notification.message}
                  </p>{" "}
                </div>
                <div className="ml-auto pl-3">
                  <button
                    onClick={() =>
                      setNotification((prev) => ({ ...prev, show: false }))
                    }
                    className="inline-flex text-white hover:text-gray-200"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quote Header */}
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold">
              <span className="text-[#2C3E50]">Request a</span>{" "}
              <span className="text-[#F39C12]">Quote</span>
            </h1>
            <p className="text-gray-700 mt-4 text-xl">
              Fill out the form below to get a customized quote
            </p>
          </div>

          {/* Quote Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <form onSubmit={handleSubmit}>
              {/* Service Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2A2559] mb-4">
                  Select Service Type
                </h2>
                <div className="border-b border-gray-200 pb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Service Category*
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black"
                    required
                  >
                    <option value="SelectNone">Select a service type</option>
                    <option value="AntennaServices">Antenna Services</option>
                    <option value="SecurityServices">
                      Security & Surveillance Services
                    </option>
                    <option value="ITServices">IT & Networking Services</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2A2559] mb-4">
                  Location
                </h2>
                <p className="text-gray-600 mb-4">
                  Please provide your location so we can check service
                  availability in your area.
                </p>
                <div className="border-b border-gray-200 pb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                    required
                  />
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Suburb*
                  </label>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    placeholder="Enter your suburb"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2A2559] mb-4">
                  Your Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200 pb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Mobile*
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2A2559] mb-4">
                  More Information
                </h2>
                <div className="border-b border-gray-200 pb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Please describe your needs or issues*
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Provide details about your requirements or problems you're experiencing"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2559] text-black placeholder-gray-500"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F39C12] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#F39C12]/80 transition-colors shadow-md disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="bg-[#2A2559] text-white p-8 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#E12026] flex-shrink-0"
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
                <span>
                  We&apos;ll review your request and prepare a customized quote
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#E12026] flex-shrink-0"
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
                <span>
                  One of our technicians will contact you within 2 hours to
                  discuss the details and schedule the service
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
