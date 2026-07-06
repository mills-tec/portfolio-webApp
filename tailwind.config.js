module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent:       "#6C4CF1",
        accentDark:   "#5538D6",
        accentLight:  "#EEE9FE",
        bgBase:       "#F4F3FA",
        bgCard:       "#FFFFFF",
        textHead:     "#111114",
        textBody:     "#5B5B63",
        textMuted:    "#9CA3AF",
        borderLight:  "#E8E8EF",
        // legacy aliases kept so any untouched component still resolves
        primaryColor: "#6C4CF1",
        bgColor:      "#F4F3FA",
        lightprimary: "#F4F1FE",
        MutedColor:   "#9CA3AF",
      },
      fontFamily: {
        sans:          ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        primaryFont:   ["Inter", "sans-serif"],
        secondaryFont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
