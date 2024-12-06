import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "240px 1fr 384px",
      },
      gridTemplateRows: {
        layout: "48px minmax(0,1fr) 48px",
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["business"],
  },
};
