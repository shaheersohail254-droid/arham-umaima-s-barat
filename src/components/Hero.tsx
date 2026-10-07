"use client";

import { motion } from "framer-motion";
import { FloralDivider, BotanicalHeader } from "./FloralDecorations";

export default function Hero() {
  return (
    <section className="hero section-frame">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-portrait-wrap"
      >
        <BotanicalHeader />
        <div className="hero-portrait-frame">
          <img
            src="/images/barat_couple_portrait.jpg"
            alt="Muhammad Arham &amp; Umaima Barat Ceremony"
            className="hero-portrait-img"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bismillah-block text-center mt-6 mb-8"
      >
        <div className="bismillah font-serif text-2xl sm:text-3xl tracking-wide">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hero-names-group my-4 text-center"
      >
        <p className="bismillah-translation text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-medium">
          In the name of Allah the most merciful and beneficial
        </p>
        <p className="eyebrow text-xs uppercase tracking-widest text-[#796b5b] mb-4 font-medium max-w-xl mx-auto px-4">
          MR &amp; MRS ZUBAIR AKHTAR CORDIALLY INVITE YOU TO THE WEDDING CEREMONY OF THEIR SON
        </p>
        <h1 className="hero-groom-title text-3xl sm:text-4xl md:text-5xl font-serif text-[#4b3726] font-semibold my-2 tracking-wide">
          Muhammad Arham Zubair
        </h1>
        <div className="with-connector font-serif italic text-2xl md:text-3xl text-[#b8944b] my-3">
          With
        </div>
        <h2 className="hero-bride-title text-3xl sm:text-4xl md:text-5xl font-serif text-[#4b3726] font-semibold my-2 tracking-wide">
          Umaima Akhtar
        </h2>
        <p className="daughter-line text-xs uppercase tracking-widest text-[#796b5b] font-medium mt-1">
          D/O Pervaiz Akhtar &amp; Tanveer Akhtar
        </p>
      </motion.div>
      <FloralDivider />
      <p className="date-display">FRIDAY · 13 NOVEMBER 2026 · 12:00 NOON</p>
    </section>
  );
}

