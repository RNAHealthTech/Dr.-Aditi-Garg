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
          50: '#f0f7fc',
          100: '#e1eff8',
          200: '#b9dcf2',
          300: '#7ebfea',
          400: '#3ea2df',
          500: '#2787c8', // Exact Logo Medical Azure Blue
          600: '#1b6ea8',
          700: '#165887',
          800: '#154b71',
          900: '#163f5f',
          950: '#0e283e',
        },
        logo: {
          blue: '#2787C8',
          red: '#DE4937',
          yellow: '#F1AA37',
          navy: '#0f2942',
        },
        clinic: {
          primary: '#1b6ea8',
          dark: '#0f2942',
          deeper: '#0a1a2c',
          light: '#f0f7fc',
          accent: '#2787c8',
          coral: '#de4937',
          amber: '#f1aa37',
          mint: '#e1eff8',
          surface: '#f8fafc',
          muted: '#64748b',
          heading: '#0d2238',
          ivory: '#f8fafc',
        },
        primary: {
          DEFAULT: "#1b6ea8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f0f7fc",
          foreground: "#1b6ea8",
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
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' }, // Since we render the items 3 times
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 40s linear infinite', // Kept name but made it 40s for smooth image scrolling
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config






