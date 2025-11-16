import BuySection from "@/components/BuySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Your landing page content goes here */}
      <HeroSection />
      <div className="rounded-xl border-4 border-[#0759FF] blur-md opacity-70"></div>
      <BuySection />
    </div>
  );
}
