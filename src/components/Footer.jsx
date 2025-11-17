"use client";
import Image from "next/image";
import React, { useState } from "react";
import FAQModal from "./FAQModal";

const socials = [
  { src: "/assets/discord.png", alt: "Discord" },
  { src: "/assets/github.png", alt: "GitHub" },
  { src: "/assets/telegram.png", alt: "Telegram" },
  { src: "/assets/twitter.png", alt: "Twitter" },
];

export default function Footer() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <>
      <footer className="w-full text-white py-12">
        <div className="max-w-[1300px] mx-auto px-4">
          {/* FAQ Button */}
          <div className="flex justify-center pb-10">
            <div
              className="p-0.5 w-[110px] h-[55px] sm:w-[111px] sm:h-[61px] rounded-[17px] hover:scale-95 transition-all cursor-pointer bg-gradient-to-r from-[#32F0FF] to-[#E239FB]"
            >
              <button
                onClick={() => setFaqOpen(true)}
                className="bg-[#071128] w-full h-full rounded-[17px] text-sm font-semibold text-white"
              >
                FAQ
              </button>
            </div>
          </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center md:text-left text-gray-300 text-base md:text-[20px] leading-relaxed max-w-[1100px] mx-auto">
          Duel.com is owned and operated by Immortal Snail LLC, registration
          number: L22982, registered address: Arthur Evelyn Building, Suite 5,
          Main Street, Charlestown, Nevis, West Indies. Contact us at
          hey@duel.com. Duel.com is licensed and regulated by the Government of
          the Autonomous Island of Anjouan, Union of Comoros and operates under
          License No. ALSI-202411026-F11. Duel.com has passed all regulatory
          compliance and is legally authorized to conduct gaming operations for
          any and all games of chance and wagering.
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center items-center gap-5 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.src}
              href="#"
              aria-label={s.alt}
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image src={s.src} alt={s.alt} width={22} height={22} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border border-[#434359] mx-auto mt-8 w-full max-w-[1200px]"></div>

        {/* Copyright */}
        <p className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} duel.com. All rights reserved.
        </p>
      </div>
      </footer>
      <FAQModal open={faqOpen} onClose={() => setFaqOpen(false)} />
    </>
  );
}
