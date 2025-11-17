import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      className="md:bg-top bg-right bg-cover pb-20 bg-no-repeat"
    >
      <Navbar />

      <div className="flex md:flex-row flex-col md:pt-[60px] pt-[40px] max-w-7xl mx-auto items-center justify-between px-16 md:px-6 gap-6 md:gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
          <h2 className="text-[#1EF9F9] text-[20px] md:text-[40px] font-bold">
            DUEL.COM
          </h2>

          <h2 className="text-white text-[28px] md:text-[40px] font-bold md:max-w-[461px] leading-tight">
            The First Casino That Gives a Fuck.
          </h2>

          <p className="text-white text-[14px] md:text-[16px] font-bold md:max-w-[461px]">
            Just the purest form of gambling — The way it should be.
          </p>

          {/* Token Sale Box */}
          <div className="w-full max-w-[444px] mt-[35px] h-auto py-6 px-4 flex flex-col justify-center rounded-2xl items-center gap-3 bg-[#010021] bg-opacity-50">
            <p className="text-white text-[16px] font-bold">
              Token Sale Ends in
            </p>

            <div className="w-full md:max-w-[362px] max-w-[193px] h-[72px] flex justify-center items-center rounded-2xl border border-[#0759FF]">
              <p className="text-white text-[16px] md:text-[24px] font-bold">
                7d 23h 45m 50s
              </p>
            </div>
          </div>
          <div className="w-full md:hidden md:py-0 py-10 flex justify-center md:justify-end">
            <img
              src="/assets/hero_img.png"
              alt="Hero Image"
              // width={900}
              // height={600}
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col md:items-start items-center">
            {" "}
            <div className="flex items-center gap-2.5">
              {" "}
              <button className="md:w-[205px] w-[150px] text-white h-[61px] bg-[#13223A] md:text-[20px] text-[12px] font-bold cursor-pointer hover:scale-95 duration-300 transition-all border border-[#0759FF] rounded-xl">
                {" "}
                Go to <span className="text-[#00A6FF]">DUEL.COM</span>{" "}
              </button>{" "}
              <button className="md:w-[205px] w-[150px] text-white h-[61px] bg-[#13223A] md:text-[20px] text-[12px] font-bold cursor-pointer hover:scale-95 duration-300 transition-all border border-[#0759FF] rounded-xl">
                {" "}
                Whitepaper{" "}
              </button>{" "}
            </div>
            <button className="relative w-full max-w-[420px] mt-[40px] h-[78px] text-white text-[24px] font-medium rounded-[21px] p-0.5 cursor-pointer hover:scale-95 duration-300 transition-all bg-linear-to-r from-[#1F9FC6] via-[#2C175C] to-[#4B275E]">
              <span className="flex items-center justify-center w-full text-[30px] md:text-[36px] font-bold h-full rounded-[20px] bg-linear-to-r from-[#4B275E] via-[#2C175C] to-[#1F9FC6]">
                BUY $DUEL
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center md:justify-end">
          <Image
            src="/assets/hero_img.png"
            alt="Hero Image"
            width={900}
            height={600}
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
