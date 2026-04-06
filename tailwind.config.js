/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "custom-gradient":
          " url('../../public/images/clouds.svg'),linear-gradient(180deg, #F48120 0%, #D5F3FE 100%)",
      },
      colors: {
        white: "rgba(255,255,255,1)",
        skyBlue: "rgba(48, 194, 248, 1)",
        lightText: "rgba(146, 146, 157, 1)",
        orange: "rgba(253, 84, 35, 1)",
        grey: "rgba(135, 135, 135, 1)",
        brown: "#634640",
        blackOne: "#4D4D4D",
        lightGrey: "#AEAEAE",
      },
      backgroundColor: {
        skyBlue: "rgba(48, 194, 248, 0.1)",
        skyBlueOne: "rgba(48,194,248,1)",
        green: "rgba(138, 194, 73, 1)",
        orange: "rgba(253, 84, 35, 1)",
        greyInput: "rgba(238, 238, 238, 1)",
        green: "rgba(138, 194, 73, 1)",
        lightOrange: "rgba(244, 174, 61, 1)",
      },
      borderColor: {
        blue: "#30C2F8",
        grey: "#D4D4D4",
      },
      fontFamily: {
        poppins: [`var(--poppins)`],
        manrope: [`var(--manrope)`],
      },
      screens: {
        xs: { max: "480px" },
        'lp-h':{'raw':'(max-height:900px)'},
        xsx: { max: "330px" },
      },
    },
  },
  plugins: [],
};
