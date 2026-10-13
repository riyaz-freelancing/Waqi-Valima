/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Royal Islamic Palette
        emerald: {
          DEFAULT: '#0B3D2E',
          deep: '#06231A',
          glow: '#125A44',
          subtle: 'rgba(11, 61, 46, 0.65)',
        },
        navy: {
          deep: '#040813',
          DEFAULT: '#0A1128',
          card: '#0D1733',
          subtle: '#111D42',
          border: 'rgba(212, 175, 55, 0.25)',
        },
        gold: {
          light: '#F5E6A8',
          DEFAULT: '#D4AF37',
          champagne: '#E6D3A3',
          antique: '#A98A45',
          dark: '#876822',
        },
        ivory: {
          DEFAULT: '#FFF8E7',
          soft: '#F5F0E6',
          muted: '#C9BEA4',
          subtle: '#9E9480',
        },
      },
      fontFamily: {
        'cinzel-dec': ['"Cinzel Decorative"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        amiri: ['"Amiri"', 'serif'],
        jost: ['"Jost"', 'system-ui', 'sans-serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest1: '0.15em',
        widest2: '0.22em',
        widest3: '0.3em',
      },
      boxShadow: {
        'gold-glow': '0 0 35px rgba(212, 175, 55, 0.3)',
        'gold-subtle': '0 0 20px rgba(212, 175, 55, 0.15)',
        'emerald-glow': '0 0 35px rgba(18, 90, 68, 0.35)',
        'luxury-card': '0 24px 60px -15px rgba(4, 8, 19, 0.85), 0 0 0 1px rgba(212, 175, 55, 0.22)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pendulum: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        pendulum: 'pendulum 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
