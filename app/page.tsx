import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ITServicesSection from "./components/ITServicesSection";
import Script from "next/script";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Aussie Tech Masters - Antenna | Security | IT Support",
  description:
    "Expert IT support services in Australia. We provide computer repairs, network setup, cybersecurity solutions, and managed IT services for businesses and homes.",
  alternates: {
    canonical: "https://aussietechit.com.au",
  },
  openGraph: {
    images: [
      {
        url: "/images/home-page-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Aussie Tech Masters - Antenna | Security | IT Support",
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
            image: "https://aussietechit.com.au/images/logo.png",
            url: "https://aussietechit.com.au",
            telephone: "1300678252",
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
              "https://www.facebook.com/aussietechit",
              "https://www.linkedin.com/company/aussietechit",
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
