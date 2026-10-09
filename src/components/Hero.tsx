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
        className="bismillah-block text-center mt-6 mb-7"
      >
        <div className="bismillah font-serif text-2xl sm:text-3xl tracking-wide mb-1">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </div>
        <p className="bismillah-translation text-xs uppercase tracking-widest text-[#d4af37] font-medium">
          In the name of Allah the most merciful and beneficial
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hero-names-group my-4 text-center"
      >
        <p className="eyebrow text-xs uppercase tracking-widest text-[#796b5b] mb-4 font-medium max-w-xl mx-auto px-4">
          MR &amp; MRS ZUBAIR AKHTAR CORDIALLY INVITE YOU TO THE WEDDING CEREMONY OF THEIR SON
        </p>
        <h2 className="hero-name-title text-2xl sm:text-3xl md:text-4xl font-serif text-[#4b3726] font-semibold my-2 tracking-wide whitespace-nowrap">
          Muhammad Arham Zubair
        </h2>
        <div className="with-connector font-serif italic text-xl md:text-2xl text-[#b8944b] my-2">
          With
        </div>
        <h2 className="hero-name-title text-2xl sm:text-3xl md:text-4xl font-serif text-[#4b3726] font-semibold my-2 tracking-wide whitespace-nowrap">
          Umaima Akhtar
        </h2>
        <p className="daughter-line text-xs uppercase tracking-widest text-[#796b5b] font-medium mt-1">
          D/O Mr &amp; Mrs Pervaiz Akhtar
        </p>
      </motion.div>
      <FloralDivider />
    </section>
  );
}

