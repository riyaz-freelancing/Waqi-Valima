import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INVITATION_CONFIG } from '../../data/invitation';

export const FinaleOverlay = ({ onFireworkBurst }) => {
  const [copied, setCopied] = useState(false);

  // Trigger firework burst when entering this scene
  useEffect(() => {
    if (onFireworkBurst) onFireworkBurst();
  }, [onFireworkBurst]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (_) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleShareWhatsApp = () => {
    const text = INVITATION_CONFIG.whatsapp.shareMessage();
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleSendRsvp = (e) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FFF8E7', '#0B3D2E'],
      });
    } catch (_) {}

    const text = INVITATION_CONFIG.whatsapp.rsvpTemplate(rsvpName, rsvpGuests, rsvpStatus);
    const phone = INVITATION_CONFIG.whatsapp.rsvpNumber;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setShowRsvpModal(false);
  };

  return (
    <section className="w-full flex flex-col items-center justify-start pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-2xl w-full mx-auto space-y-4 sm:space-y-5 pointer-events-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Gratitude &amp; Celebration
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-ivory mt-1">
            We Await Your Gracious Presence
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Compliments Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass-emerald-card p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-luxury-card relative overflow-hidden"
        >
          <p className="font-serif uppercase tracking-widest2 text-xs sm:text-sm text-gold-light font-medium">
            With best compliment From:
          </p>

          <p className="font-serif italic text-2xl sm:text-3xl text-ivory mt-2">
            Near &amp; Dear
          </p>
        </motion.div>

        {/* Action Buttons: WhatsApp Share & Copy Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          {/* Share on WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-xs font-cinzel uppercase tracking-wider text-white border border-[#25D366]/50 transition-all shadow-md cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#25D366]" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-navy-card hover:bg-navy-subtle text-xs font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gold" />}
            <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
          </button>
        </motion.div>

        {/* Footer Credits */}
        <p className="font-cinzel text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-light/60 pt-4">
          Mohammed Waqiullah Khan &amp; Syeda Sara Fatima · October 2026
        </p>
      </div>
    </section>
  );
};
