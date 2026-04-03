/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d1d7c8",
          300: "#adb8a1",
          400: "#829173",
          500: "#637456",
          600: "#4f5d46",
          700: "#404a3a",
          800: "#353e31",
          900: "#2d342b",
        },
        terracotta: {
          50: "#fdf6f3",
          100: "#fce8e2",
          200: "#f9d5c9",
          300: "#f4b4a0",
          400: "#ec8a6d",
          500: "#e16348",
          600: "#cd482f",
          700: "#ac3925",
          800: "#8e3223",
          900: "#762e22",
        },
        ink: "#1a1814",
        parchment: "#f3efe6",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Source Sans 3'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
