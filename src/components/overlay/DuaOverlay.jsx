import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const DuaOverlay = () => {
  const { bismillah, honors, groom, bride } = INVITATION_CONFIG;

  return (
    <section className="w-full flex flex-col items-center justify-start py-8 sm:py-12 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl w-full mx-auto text-center pointer-events-auto"
      >
        <div className="glass-emerald-card p-8 sm:p-12 rounded-3xl border border-gold/40 shadow-luxury-card relative overflow-hidden">
          {/* Subtle Top Light Accent */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Section Badge */}
          <span className="inline-block px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 text-gold-light bg-navy-deep/80 border border-gold/30 mb-6">
            Sacred Blessing
          </span>

          {/* Bismillah Calligraphy */}
          <div
            className="font-amiri text-2xl xs:text-3xl sm:text-4xl text-gold font-normal leading-[1.9] my-2 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]"
            dir="rtl"
            lang="ar"
          >
            {bismillah.arabic}
          </div>

          <p className="font-cormorant italic text-sm sm:text-base text-gold-light/90 mt-2 tracking-wide">
            {bismillah.english}
          </p>

          {/* Card Invitation Phrase */}
          <p className="font-cormorant text-base sm:text-xl text-ivory font-medium mt-5 leading-relaxed">
            “{honors.host.invitationPhrase}”
          </p>

          <p className="font-great-vibes text-3xl sm:text-4xl text-gold-light mt-4">
            {groom.fullName} &amp; {bride.fullName}
          </p>

          {/* Compliment from Card */}
          <div className="mt-6 pt-4 border-t border-gold/20 flex flex-col items-center justify-center gap-1">
            <span className="font-serif uppercase tracking-widest2 text-xs text-gold-light/80">
              With best compliment From:
            </span>
            <span className="font-serif italic text-lg sm:text-xl text-ivory">
              Near &amp; Dear
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
