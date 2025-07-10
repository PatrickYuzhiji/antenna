import BookHero from "@/app/components/BookHero";
import Footer from "@/app/components/Footer";

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BookHero />
      <div className="w-full h-1 bg-gradient-to-r from-[#2C3E50] via-[#F39C12] to-[#2C3E50]"></div>
      <Footer />
    </div>
  );
}
