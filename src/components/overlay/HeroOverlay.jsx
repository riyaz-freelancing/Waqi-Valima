import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const HeroOverlay = () => {
  const { bismillah } = INVITATION_CONFIG;

  return (
    <section className="w-full flex flex-col items-center justify-start pt-6 sm:pt-10 pb-2 px-4 sm:px-6 text-center select-none pointer-events-none relative z-10">
      {/* Top Header: Bismillah */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <span
          className="font-amiri text-2xl xs:text-3xl sm:text-4xl text-gold font-normal tracking-wide drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] block mb-2"
          dir="rtl"
        >
          {bismillah.arabic}
        </span>
        <p className="font-cormorant italic text-xs sm:text-sm text-ivory/80 tracking-wide">
          {bismillah.english}
        </p>

        {/* Small Khatim Emblem */}
        <div className="flex items-center justify-center gap-2 mt-3 opacity-70">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs">✦</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </motion.div>
    </section>
  );
};
