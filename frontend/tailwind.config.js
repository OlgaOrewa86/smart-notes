import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        chocolate: {
          primary: "#8c6e54",
          secondary: "#b89a7a",
          accent: "#d7bfa3",
          neutral: "#3b2f2f",

          "base-100": "#f3e7d3",
          "base-200": "#e8d7c0",
          "base-300": "#d7c3a3",

          info: "#8c6e54",
          success: "#a68b6a",
          warning: "#d7bfa3",
          error: "#8c4f3f",
        },
      },
      "caramellatte",
    ],
  },
};
