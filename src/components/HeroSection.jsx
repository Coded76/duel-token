import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      className="bg-top bg-cover pb-20 bg-no-repeat"
    >
      <Navbar />
      <div className="flex md:flex-row flex-col md:pt-[60px] pt-[40px] max-w-7xl mx-auto items-center justify-center">
        <div>
          <h2 className="text-[#1EF9F9] text-[40px] md:text-start text-center font-bold">
            DUEL.COM
          </h2>
          <h2 className="text-[#FFFFFF] text-[40px] pt-[22px] md:text-start text-center font-bold md:max-w-[461px]">
            The First Casino That Gives a Fuck.
          </h2>
          <p className="text-[#FFFFFF] pt-[17px] text-[16px] md:text-start text-center font-bold md:max-w-[461px]">
            Just the purest form of gambling — The way it should be.
          </p>
          <div className="w-[444px] mt-[41px] h-[157px] md:mx-0 mx-auto flex flex-col justify-center rounded-2xl items-center gap-2.5 bg-[#010021] ">
            <p className="text-[#FFFFFF] text-[16px] font-bold">
              Token Sale Ends in
            </p>

            <div className="w-[362px] h-[72px] flex justify-center items-center rounded-2xl border border-[#0759FF]">
              <p className="text-[#FFFFFF] text-[24px] font-bold">
                7d 23h 45m 50s
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <div className="flex mt-12 items-center gap-2.5">
              <button className="w-[205px] h-[61px] bg-[#13223A] text-[20px] font-bold cursor-pointer hover:scale-95 duration-300 transition-all border border-[#0759FF] rounded-xl">
                Go to <span className="text-[#00A6FF]">DUEL.COM</span>
              </button>
              <button className="w-[205px] h-[61px] bg-[#13223A] text-[20px] font-bold cursor-pointer hover:scale-95 duration-300 transition-all border border-[#0759FF] rounded-xl">
                Whitepaper
              </button>
            </div>

            <button className="relative w-[420px] mt-[50px] h-[78px] text-white text-[24px] font-medium rounded-[21px] p-0.5 cursor-pointer hover:scale-95 duration-300 transition-all bg-linear-to-r from-[#1F9FC6] via-[#2C175C] to-[#4B275E]">
              <span className="flex items-center justify-center w-[420px] text-[36px] font-bold h-full rounded-[20px] bg-linear-to-r from-[#4B275E] via-[#2C175C] to-[#1F9FC6]">
                BUY $DUEL
              </span>
            </button>
          </div>
        </div>
        <div className="md:ml-20">
          <Image
            src="/assets/hero_img.png"
            alt="Hero Image"
            width={900}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
