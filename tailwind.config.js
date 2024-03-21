/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#274384",
          light: "#B9D1F6",
          dark: "#1C305E",
          darker: "#101C37",
        },
        neutral: {
          DEFAULT: "#A3A3A3",
          light: "#E5E5E5",
          dark: "#525252",
          darker: "#262626",
        },
        warning: {
          DEFAULT: "#FBBF24",
          light: "#FDE68A",
          dark: "#D97706",
          darker: "#92400E",
        },
        error: {
          DEFAULT: "#DC2626",
          ight: "#EA8080",
          dark: "#B41D1D",
          darker: "#881616",
        },
        info: {
          DEFAULT: "#38BDF8",
          ight: "#BAE6FD",
          dark: "#0284C7",
          darker: "#075985",
        },
        success: {
          DEFAULT: "#16A34A",
          ight: "#39E478",
          dark: "#107535",
          darker: "#0A4821",
        },
      },
      fontFamily:{
        noto: ['Noto Sans Thai' , ]
      }
    },

  },
  plugins: [],
};
