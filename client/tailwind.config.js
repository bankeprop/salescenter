/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        destructive: "var(--destructive)",
        border: "var(--border)",
        ivory: "var(--ivory)",
        gold: "rgb(var(--obsidian-gold) / <alpha-value>)",
        charcoal: "rgb(var(--obsidian-charcoal) / <alpha-value>)",
        graphite: "rgb(var(--obsidian-graphite) / <alpha-value>)",
      },
      backgroundImage: {
        "gold-gradient": "var(--gradient-gold)",
      },
    },
  },
  plugins: [],
}
