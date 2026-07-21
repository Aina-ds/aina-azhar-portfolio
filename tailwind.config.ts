import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#131B2E", // primary heading text
          700: "#1E293B", // body text
          500: "#5B6479", // secondary / muted text
          300: "#94A0B8", // faint text
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F9FC",
          card: "#FBFCFE",
          border: "#E6EAF2",
        },
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1E3A8A",
          light: "#EFF4FF",
          soft: "#DCE7FF",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(19, 27, 46, 0.04), 0 8px 24px -8px rgba(19, 27, 46, 0.08)",
        "card-hover": "0 4px 12px rgba(19, 27, 46, 0.06), 0 20px 40px -12px rgba(37, 99, 235, 0.16)",
        nav: "0 1px 0 rgba(19, 27, 46, 0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(10px,-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
