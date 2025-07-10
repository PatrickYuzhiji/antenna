import Footer from "@/app/components/Footer";
import WhyChooseUsIt from "@/app/components/WhyChooseUsIt";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {children}
      <WhyChooseUsIt />
      <Footer />
    </div>
  );
}
