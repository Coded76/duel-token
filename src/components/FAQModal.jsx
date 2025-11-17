"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What is Lorem Ipsum?",
    a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, nunc eu pretium cursus, urna lorem volutpat urna, a fermentum nisl orci et turpis.`,
  },
  {
    q: "How does the process work?",
    a: `Curabitur feugiat sapien vitae lacus fermentum, a elementum ipsum facilisis. Nulla facilisi. Cras suscipit augue a ligula feugiat, quis pulvinar augue dignissim. Suspendisse potenti.`,
  },
  {
    q: "Do I need an account to get started?",
    a: `No — you only need a wallet to participate in the presale. Creating an account on our site is optional and provides additional features.`,
  },
  {
    q: "Where can I get support?",
    a: `Reach out to our support channels listed in the footer or contact hey@duel.com for further assistance.`,
  },
];

export default function FAQModal({ open, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // prevent background scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal wrapper with gradient border */}
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div className="flex items-center justify-center  py-1 px-1 w-[1063px] rounded-3xl bg-gradient-to-r from-[#32F0FF] to-[#E239FB]">
          <div className="bg-[#071128] w-[1053px] rounded-2xl  p-6 md:p-8 text-white shadow-[0_8px_40px_rgba(0,0,0,0.6)] max-h-[80vh] overflow-y-auto">
            {/* header */}
            <div className="flex items-center justify-center mb-4 relative">
              <div className="flex flex-row items-center justify-center w-full gap-6 md:gap-[35px] ">
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
            </div>

            <h2 className="text-[28px] text-center md:text-[36px] font-bold text-white">
              FAQ
            </h2>

            {/* accordion list */}
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className="rounded-lg border border-[#372b4a] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-4 h-[67px] bg-gradient-to-r from-[#070717] via-[#07102a] to-[#03041a] hover:opacity-95 transition"
                    >
                      <span className="text-sm md:text-base font-medium text-white">
                        {f.q}
                      </span>
                      <svg
                        className={`transform transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#C9C9D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`px-4 text-sm md:text-base text-gray-300 transition-max-h duration-300 ${
                        isOpen ? "max-h-[400px] py-4" : "max-h-0"
                      }`}
                    >
                      <div className="prose prose-sm text-gray-300">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl border-4 border-[#0759FF] mt-[50px] blur-md opacity-70"></div>

            {/* footer area with timer and CTA like design */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-300">Token Sale ends in:</p>
                <p className="text-lg font-bold text-white">7d 23h 45m 50s</p>
              </div>

              <div className="ml-auto">
                <button className="relative w-[246px] h-[55px] md:h-[62px] text-white text-[18px] md:text-[20px] font-bold rounded-2xl p-0.5 cursor-pointer hover:scale-95 transition-all bg-gradient-to-r from-[#1F9FC6] via-[#2C175C] to-[#4B275E]">
                  <span className="flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-r from-[#4B275E] via-[#2C175C] to-[#1F9FC6]">
                    Let&apos;s Go!
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
