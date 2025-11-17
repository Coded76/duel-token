"use client";
import Image from "next/image";
import React from "react";
import Footer from "./Footer";

function BuySection() {
  return (
    <div
      style={{ backgroundImage: "url('/assets/second-bg.png')" }}
      className="bg-top bg-cover pt-[100px] bg-no-repeat"
    >
      <div className="w-full flex  justify-center items-center md:pt-[100px] pt-[30px] px-4">
        <div className="w-full relative max-w-[652px]">
          <img
            src="/assets/eth_icon.png"
            className="absolute -top-20 z-[5000] -left-16"
            alt=""
          />
          <img
            src="/assets/duel_icon.png"
            className="absolute -top-20 z-[5000] -right-16"
            alt=""
          />
          <div className="p-[2px] rounded-[40px] bg-gradient-to-r from-[#32F0FF] to-[#E239FB]">
            <div className="bg-[#030B24] rounded-[38px] px-6 md:px-[60px] py-10 relative border border-[#1C2B5A] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              {/* Header Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/sword.png"
                  alt="Duel Token Logo"
                  width={50}
                  height={50}
                  className="w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
                />
              </div>

              {/* Title */}
              <h2
                className="
              text-white 
              text-center 
              text-[32px] md:text-[48px] 
              pb-[20px] md:pb-[35px] 
              font-bold 
              drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
            "
              >
                $DUEL Presale
              </h2>

              {/* Timer */}
              <div
                className="
            max-w-[362px] 
            mx-auto 
            h-[60px] md:h-[72px] 
            flex justify-center items-center 
            rounded-2xl 
            border border-[#0759FF] 
            mb-[32px] md:mb-[42px]
          "
              >
                <p className="text-white text-[20px] md:text-[24px] font-bold">
                  7d 23h 45m 50s
                </p>
              </div>

              {/* Progress Section */}
              <p className="text-white text-sm font-medium">Current Progress</p>

              <div className="w-full h-[32px] md:h-[41px] border border-[#0759FF] rounded-md mt-2 relative">
                <div className="h-full bg-gradient-to-r from-[#1E4BFF] to-[#00A6FF] w-[67%] rounded-md"></div>

                <span className="absolute right-2 top-1 text-white text-[14px] md:text-[20px] font-bold">
                  67%
                </span>
              </div>

              {/* Token Selector */}
              <div
                className="
            mt-5 
            border border-[#0759FF] 
            h-[60px] md:h-[68px] 
            rounded-md 
            p-3 
            flex items-center justify-between
          "
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-500"></div>
                  <p className="text-white font-medium text-[14px] md:text-[16px]">
                    ETHEREUM
                  </p>
                </div>

                <p className="text-white font-semibold text-[14px] md:text-[16px]">
                  0,0 ETH
                </p>
              </div>

              {/* Amount Input */}
              <div
                className="
            mt-3 
            border border-[#0759FF] 
            h-[60px] md:h-[68px] 
            rounded-md 
            p-4
          "
              >
                <div className="flex justify-between items-center">
                  <p className="text-white font-semibold text-[14px] md:text-[16px]">
                    0,0 ETH
                  </p>

                  <p className="text-[#1A8CFF] font-semibold cursor-pointer text-[14px] md:text-[16px]">
                    Max Amount
                  </p>
                </div>
              </div>

              {/* Receive Amount */}
              <div className="text-center my-8 md:my-10">
                <p className="text-[#A7A7A7] text-[16px] md:text-[20px]">
                  You will receive
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="border border-[#0759FF] flex-1"></div>

                  <p className="text-[#00A6FF] text-[28px] md:text-[32px] font-bold px-4">
                    100 $DUEL
                  </p>

                  <div className="border border-[#0759FF] flex-1"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                {/* Connect Wallet */}
                <button className="w-full h-[55px] md:h-[61px] bg-[#00136A] text-[18px] md:text-[20px] font-bold cursor-pointer hover:scale-95 transition-all border border-[#0759FF] rounded-2xl">
                  Connect Wallet
                </button>

                {/* Buy Now */}
                <button className="relative w-full h-[55px] md:h-[62px] text-white text-[18px] md:text-[20px] font-bold rounded-2xl p-0.5 cursor-pointer hover:scale-95 transition-all bg-gradient-to-r from-[#1F9FC6] via-[#2C175C] to-[#4B275E]">
                  <span className="flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-r from-[#4B275E] via-[#2C175C] to-[#1F9FC6]">
                    Buy now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full gap-6 md:gap-[35px] pt-[50px] pb-[34px]">
        {/* Left Line */}
        <div
          className="rounded-xl border-2 border-[#0759FF] blur-xs 
                  w-[80px] md:w-[150px] lg:w-[195px] opacity-90"
        ></div>

        {/* Logo + Text */}
        <div className="flex items-center gap-2 md:gap-3">
          <Image
            src="/assets/logo.png"
            alt="Duel Token Logo"
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />

          <h2 className="text-[28px] md:text-[36px] font-bold text-white">
            DUEL
          </h2>

          <Image
            src="/assets/sword.png"
            alt="Duel Sword Logo"
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />
        </div>

        {/* Right Line */}
        <div
          className="rounded-xl border-2 border-[#0759FF] blur-xs
                  w-[80px] md:w-[150px] lg:w-[195px] opacity-90"
        ></div>
      </div>

      <Footer />
    </div>
  );
}

export default BuySection;
