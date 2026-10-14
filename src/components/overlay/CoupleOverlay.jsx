import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { INVITATION_CONFIG } from '../../data/invitation';

export const CoupleOverlay = () => {
  const { groom, bride } = INVITATION_CONFIG;

  return (
    <section className="w-full flex flex-col items-center justify-start py-8 sm:py-12 px-4 sm:px-6 select-none pointer-events-none relative z-10 gap-4 sm:gap-5">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
          The Blessed Union
        </span>
        <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
          Groom &amp; Bride
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs">✦</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </motion.div>

      {/* Decorative Monogram Crest connecting Groom & Bride (Eliminates the empty gap) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 my-1"
      >
        <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/60" />
        <div className="w-12 h-12 rounded-full border border-gold/50 bg-navy-card/90 flex items-center justify-center shadow-gold-subtle backdrop-blur-md">
          <span className="font-cinzel text-gold text-sm font-bold tracking-wider">W &amp; S</span>
        </div>
        <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/60" />
      </motion.div>

      {/* Profile Details Cards */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pointer-events-auto"
      >
        {/* Groom Profile */}
        <div className="glass-emerald-card p-6 sm:p-7 rounded-2xl text-center relative overflow-hidden border border-gold/40 shadow-luxury-card">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase font-cinzel text-gold bg-navy-deep/80 border border-gold/30 mb-2">
            Groom
          </span>
          <h3 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl font-normal text-ivory tracking-wide leading-snug">
            {groom.fullName}
          </h3>
          <p className="font-cinzel text-xs tracking-widest1 text-gold-light mt-1">
            {groom.degrees}
          </p>
        </div>

        {/* Bride Profile */}
        <div className="glass-emerald-card p-6 sm:p-7 rounded-2xl text-center relative overflow-hidden border border-gold/40 shadow-luxury-card">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase font-cinzel text-gold bg-navy-deep/80 border border-gold/30 mb-2">
            Bride
          </span>
          <h3 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl font-normal text-ivory tracking-wide leading-snug">
            {bride.fullName}
          </h3>
          <p className="font-cinzel text-xs tracking-widest1 text-gold-light mt-1">
            {bride.degrees}
          </p>
          <p className="font-cormorant text-xs sm:text-sm text-ivory/80 mt-2 italic leading-relaxed">
            {bride.lineage}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
