import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom: ["Porcelanosa", "Arial"],
      },
    },
  },
  plugins: [],
} satisfies Config;
