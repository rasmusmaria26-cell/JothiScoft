import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          page: "var(--bg-page)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
          active: "var(--bg-active)",
          border: "var(--bg-border)",
        },
        gold: {
          deep: "var(--gold-deep)",
          mid: "var(--gold-mid)",
          bright: "var(--gold-bright)",
          tint: "var(--gold-tint)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          disabled: "var(--text-disabled)",
          inverse: "var(--text-inverse)",
        },
        cat: {
          horoscope: "var(--cat-horoscope)",
          panchangam: "var(--cat-panchangam)",
          marriage: "var(--cat-marriage)",
          numerology: "var(--cat-numerology)",
          prasnam: "var(--cat-prasnam)",
          special: "var(--cat-special)",
        },
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
        info: "var(--info)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        pill: "999px",
      },
      fontFamily: {
        sans: ["var(--font-anek-tamil)", "sans-serif"],
        serif: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
