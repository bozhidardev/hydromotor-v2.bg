import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A855',
          light: '#E8C872',
          dark: '#8B7335',
          rich: '#D4AF37',
          50: '#FBF7E8',
          100: '#F5ECBE',
          200: '#ECD885',
          300: '#E2C44D',
          400: '#D4AF37',
          500: '#C8A855',
          600: '#A68A3A',
          700: '#8B7335',
          800: '#6B572A',
          900: '#4A3C1D',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          50: '#333333',
          100: '#2A2A2A',
          200: '#222222',
          300: '#1A1A1A',
          400: '#141414',
          500: '#111111',
          600: '#0D0D0D',
          700: '#0A0A0A',
        },
        surface: {
          DEFAULT: '#111111',
          base: '#0A0A0A',
          light: '#1A1A1A',
          card: '#141414',
          elevated: '#111111',
          overlay: '#161616',
          highlight: '#1A1A1A',
          border: '#2A2A2A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D4D4D4',
          muted: '#A3A3A3',
          accent: '#C8A855',
          body: '#D4D4D4',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25', letterSpacing: '0' }],
        h4: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.35' }],
        h5: ['1.125rem', { lineHeight: '1.5' }],
        h6: ['1rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        body: ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        caption: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        overline: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        container: '1400px',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.25), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        gold: '0 0 20px rgba(200, 168, 85, 0.35)',
        'gold-lg': '0 0 40px rgba(200, 168, 85, 0.25)',
        glass: '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'cta-pulse': 'ctaPulse 2s ease-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%': { boxShadow: '0 0 0 0 rgba(200, 168, 85, 0.4)' },
          '70%': { boxShadow: '0 0 0 12px rgba(200, 168, 85, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(200, 168, 85, 0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ctaPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(200, 168, 85, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(200, 168, 85, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(200, 168, 85, 0)' },
        },
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A855 0%, #D4AF37 50%, #E8C872 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #D4AF37 0%, #E8C872 50%, #C8A855 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C8A855 0%, #E8C872 50%, #C8A855 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.65) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;