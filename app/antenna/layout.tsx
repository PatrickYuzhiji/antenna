import WhyChooseUsAntenna from "../components/WhyChooseUsAntenna";

import Footer from "../components/Footer";

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {children}
      <WhyChooseUsAntenna />
      <Footer />
    </div>
  );
}
