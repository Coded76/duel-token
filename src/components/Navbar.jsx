import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex pt-6 md:pt-10 items-center justify-between py-3 md:py-4 px-4 md:px-6">
      <div className="flex items-center gap-1 md:gap-1.5">
        <Image
          src="/assets/logo.png"
          alt="Duel Token Logo"
          width={50}
          height={50}
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <h2 className="text-[20px] md:text-[36px] font-bold text-white">DUEL</h2>
        <Image
          src="/assets/sword.png"
          alt="Duel Token Logo"
          width={50}
          height={50}
          className="w-8 h-8 md:w-12 md:h-12"
        />
      </div>
      <div>
        <button className="relative w-[120px] md:w-[166px] h-[48px] md:h-[55px] text-white text-[14px] md:text-[24px] font-medium rounded-full p-0.5 cursor-pointer hover:scale-95 duration-300 transition-all bg-gradient-to-r from-[#32F0FF] to-[#E239FB]">
          <span className="flex items-center justify-center w-full h-full rounded-full bg-[#040a1c]">
            Get $DUEL
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
