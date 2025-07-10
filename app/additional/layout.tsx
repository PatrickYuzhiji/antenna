import Header from "@/app/components/Header";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ITServicesSection from "@/app/components/ITServicesSection";
import Footer from "@/app/components/Footer";

export default function AdditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {children}
      <WhyChooseUs />
      <ITServicesSection />
      <Footer />
    </div>
  );
}
