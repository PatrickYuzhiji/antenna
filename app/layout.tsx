import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2C3E50",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aussietechit.com.au"),
  title: {
    template: "%s | Aussie Tech Masters",
    default: "Aussie Tech Masters - Antenna | Security | IT Support",
  },
  description:
    "Professional IT support services for businesses and homes in Australia. Computer repairs, network setup, cybersecurity, and managed IT solutions.",
  keywords: [
    "IT support",
    "computer repair",
    "network setup",
    "managed IT services",
    "cybersecurity",
    "data recovery",
    "business IT",
    "residential IT",
    "Australia",
  ],
  authors: [{ name: "Aussie Tech Masters" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "aussietech IT Support | IT Services for Business & Residential",
    description:
      "Professional IT support services for businesses and homes in Australia. Computer repairs, network setup, cybersecurity, and managed IT solutions.",
    url: "https://aussietechit.com.au",
    siteName: "Aussie Tech Masters",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/aussietech-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "aussietech IT Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "aussietech IT Support | IT Services for Business & Residential",
    description:
      "Professional IT support services for businesses and homes in Australia.",
    images: ["/images/aussietech-social-preview.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2C3E50",
      },
      {
        rel: "shortcut icon",
        url: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="msapplication-TileColor" content="#2C3E50" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#2C3E50" />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3JE545VNL"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3JE545VNL');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ITService",
              name: "aussietech IT Support",
              url: "https://aussietechit.com.au",
              logo: "/images/logo.png",
              description:
                "Professional IT support services for businesses and homes in Australia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sydney",
                addressRegion: "NSW",
                addressCountry: "AU",
              },
              telephone: "1300678252",
              email: "info@aussietechit.com.au",
              sameAs: [
                "https://www.facebook.com/aussietechit",
                "https://www.linkedin.com/company/aussietechit",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
