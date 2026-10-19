/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — driven by the reference mockups.
        // Override per-client via CSS variables in clientConfig.js if needed.
        cream: '#fdfbf7',
        navy: {
          DEFAULT: '#1b2a4a',
          light: '#2c3f66',
          dark: '#0f1a30',
        },
        wax: '#c98a4b',
        balloon: '#a9bcd8',
      },
      fontFamily: {
        // Body / letter copy
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        // Headings / signature script
        script: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        polaroid: '0 10px 25px -5px rgba(27, 42, 74, 0.25), 0 8px 10px -6px rgba(27, 42, 74, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-110vh) translateX(20px) rotate(8deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 9s linear infinite',
      },
    },
  },
  plugins: [],
};
