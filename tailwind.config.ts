import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        teal: {
          50: '#f0faf9',
          100: '#d0f0ec',
          200: '#a5e0d9',
          300: '#72cac0',
          400: '#44afa5',
          500: '#2c938a',
          600: '#1f7570',
          700: '#185e5a',
          800: '#154c49',
          900: '#0e3e3b',
          950: '#061e1d',
        },
        clinic: {
          primary: '#0e4e50',
          dark: '#0d3638',
          deeper: '#081c1d',
          light: '#f0f8f7',
          accent: '#1d7a7d',
          mint: '#e6f4f1',
          surface: '#faf9f7',
          muted: '#64748b',
          heading: '#0d3033',
          ivory: '#faf9f7',
        },
        primary: {
          DEFAULT: "#0e4e50",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f0f8f7",
          foreground: "#0e4e50",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config






