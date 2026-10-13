import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const TitleOverlay = () => {
  return (
    <section className="min-h-[85vh] sm:min-h-screen w-full flex flex-col items-center justify-center py-10 sm:py-14 px-4 sm:px-6 text-center select-none pointer-events-none relative z-10 gap-5 sm:gap-6">
      {/* Top Framing Announcement */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="max-w-xl mx-auto pointer-events-auto"
      >
        <span className="font-cinzel text-[11px] sm:text-xs uppercase tracking-widest3 text-gold/90 block mb-2">
          {INVITATION_CONFIG.honors.host.invitationPhrase}
        </span>

        {/* Ornate Pill Frame for Valima Ceremony */}
        <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 rounded-full bg-navy-card/85 border border-gold/40 shadow-luxury-card backdrop-blur-md">
          <span className="text-gold text-xs">❖</span>
          <h1 className="font-cinzel text-base sm:text-xl md:text-2xl tracking-widest2 uppercase text-ivory font-semibold">
            Valima Ceremony
          </h1>
          <span className="text-gold text-xs">❖</span>
        </div>
      </motion.div>

      {/* Royal Couple Center Title Card - Completely Eliminates the Empty Gap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.0, delay: 0.15 }}
        className="max-w-2xl w-full mx-auto pointer-events-auto"
      >
        <div className="glass-emerald-card p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-luxury-card relative overflow-hidden text-center">
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Groom Details */}
          <div className="space-y-1">
            <h2 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-wide leading-tight">
              {INVITATION_CONFIG.groom.fullName}
            </h2>
            <p className="font-cinzel text-xs sm:text-sm text-gold tracking-widest2">
              {INVITATION_CONFIG.groom.degrees}
            </p>
          </div>

          {/* Elegant Joiner */}
          <div className="flex items-center justify-center gap-3 my-3 sm:my-4">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="font-great-vibes text-2xl sm:text-3xl text-gold-light">with</span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          {/* Bride Details */}
          <div className="space-y-1">
            <h2 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-wide leading-tight">
              {INVITATION_CONFIG.bride.fullName}
            </h2>
            <p className="font-cinzel text-xs sm:text-sm text-gold tracking-widest2">
              {INVITATION_CONFIG.bride.degrees}
            </p>
            <p className="font-cormorant italic text-xs sm:text-sm text-ivory/80 pt-1 max-w-lg mx-auto">
              {INVITATION_CONFIG.bride.lineage}
            </p>
          </div>

          {/* Ceremony Date & Venue Summary Chip */}
          <div className="mt-5 pt-4 border-t border-gold/20 flex flex-wrap items-center justify-center gap-2 text-xs font-cinzel text-gold-light">
            <span className="px-3.5 py-1 rounded-full bg-navy-deep/80 border border-gold/30">
              Sunday, 25th October 2026
            </span>
            <span className="px-3.5 py-1 rounded-full bg-navy-deep/80 border border-gold/30">
              Perfect Palace · Hyderabad
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Subtitle / Blessing Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="max-w-md mx-auto pointer-events-auto"
      >
        <p className="font-cormorant italic text-sm sm:text-base text-gold-light/90">
          In Sha Allah · Hyderabad, India
        </p>
      </motion.div>
    </section>
  );
};
