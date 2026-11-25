import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Georgia', "'Times New Roman'", 'serif'],
      },
      colors: {
        // One warm neutral ramp for text: primary / secondary / muted.
        // (Unslop pass 2: stone-* greys removed, everything reads from this ramp.)
        ink: {
          DEFAULT: '#241a12',
          secondary: '#5e554a',
          muted: '#7b7266',
        },
        brand: {
          50: '#fdf8f3',
          100: '#f5e9d9',
          200: '#e8d0b4',
          300: '#d4b08a',
          400: '#bc8d60',
          500: '#a06b3f',
          600: '#8a5530',
          700: '#724422',
          800: '#5c3318',
          900: '#3d1f0a',
        },
        rose: {
          50: '#fdf2f4',
          100: '#fbe4e8',
          200: '#f3c2cb',
        },
      },
    },
  },
  plugins: [],
};

export default config;
