import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ITServicesSection from "./components/ITServicesSection";
import Script from "next/script";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "IT Tech - Antenna | Security | IT Support",
  description:
    "Expert IT support services in Australia. We provide computer repairs, network setup, cybersecurity solutions, and managed IT services for businesses and homes.",
  alternates: {
    canonical: "https://itexample.com.au",
  },
  openGraph: {
    images: [
      {
        url: "/images/home-page-banner.jpg",
        width: 1200,
        height: 630,
        alt: "IT Tech - Antenna | Security | IT Support",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <HeroSection />
        <WhyChooseUs />
        <ITServicesSection />
        <Footer />
      </div>

      {/* Structured Data for LocalBusiness */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "aussietech IT Support",
            image: "https://itexample.com.au/images/logo.png",
            url: "https://itexample.com.au",
            telephone: "1300000000",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 IT Support Street",
              addressLocality: "Sydney",
              addressRegion: "NSW",
              postalCode: "2000",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -33.8688,
              longitude: 151.2093,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:30",
              },
            ],
            sameAs: [
              "https://www.facebook.com/itexample",
              "https://www.linkedin.com/company/itexample",
            ],
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Jane Smith",
              },
              reviewBody:
                "Excellent IT support service. Resolved our network issues quickly and professionally.",
            },
            // Enhanced local SEO fields
            areaServed: [
              {
                "@type": "City",
                name: "Wollongong",
              },
              {
                "@type": "City",
                name: "Sydney",
              },
              {
                "@type": "State",
                name: "New South Wales",
              },
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: -34.4278,
                longitude: 150.8931,
              },
              geoRadius: "50000", // 50km radius
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            paymentAccepted: "Cash, Credit Card, Bank Transfer",
            currenciesAccepted: "AUD",
          }),
        }}
      />

      {/* Structured Data for FAQPage */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Aussietech IT Support offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer a wide range of IT services including computer repairs, network setup, cybersecurity solutions, data recovery, managed IT services, and smart home setup for both businesses and residential clients.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer on-site IT support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide on-site IT support for both residential and business clients throughout our service area. We can also handle many issues remotely for faster resolution.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can you respond to IT emergencies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We prioritize IT emergencies and typically respond within 1-4 hours for business clients with support agreements. For standard service requests, we aim to respond within 24 hours.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
