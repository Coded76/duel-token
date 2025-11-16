import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex pt-10 items-center justify-between py-4 px-6">
      <div className="flex items-center gap-1.5">
        <Image
          src="/assets/logo.png"
          alt="Duel Token Logo"
          width={50}
          height={50}
        />
        <h2 className="text-[36px] font-bold text-white">DUEL</h2>
        <Image
          src="/assets/sword.png"
          alt="Duel Token Logo"
          width={50}
          height={50}
        />
      </div>
      <div>
        <button className="relative w-[166px] h-[55px] text-white text-[24px] font-medium rounded-[45px] p-0.5 cursor-pointer hover:scale-95 duration-300 transition-all bg-linear-to-r from-[#32F0FF] to-[#E239FB]">
          <span className="flex items-center justify-center w-full h-full rounded-[40px] bg-[#040a1c]">
            Get $DUEL
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
