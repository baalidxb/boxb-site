/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        accent: '#D4AF37',
        'accent-dim': '#8A7325',
        fg: '#FFFFFF',
        muted: '#6B6B6B',
        'muted-bright': '#A0A0A0',
        surface: '#0F0F0F',
        'surface-2': '#141414',
        border: '#1A1A1A',
        'border-bright': '#2A2A2A',
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'display-tight': '-0.02em',
        'display-tighter': '-0.03em',
      },
      fontSize: {
        // Display sizes for hero / sections
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        lede: ['clamp(1.125rem, 1.6vw, 1.5rem)', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
