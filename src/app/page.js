import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className=" bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/main_bg_image.png')" }}
    >
      {/* Your landing page content goes here */}
      <Navbar />
      <HeroSection />
      <div className="rounded-xl border-4 my-[86px] border-[#0759FF] blur-md opacity-70"></div>
    </div>
  );
}
