module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#7911ee",
        MutedColor: "rgba(255,255,255,0.7)",
        bgColor: "#021024",
        lightprimary: "#E0D1FB0D",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans-serif"], // headers, main text
        secondaryFont: ["Ancizar Serif", "serif"], // secondary/paragraph text
      },
    },
  },
  plugins: [],
};
