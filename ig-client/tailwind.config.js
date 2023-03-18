/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logos: "url('./assets/Global/logos2.png')",
        mobile: "url('./assets/Auth/mobile.png')",
      },
      backgroundPosition: {
        instagramLogoBlack: "0px 4px",
        instagramLogoWhite: "0px -38px",
      },
      height: {
        "custom-800": "800px",
      },
      width: {
        "custom-30": "30rem",
      },
      maxWidth: {
        "custom-30": "30rem",
      },
      margin: {
        "mt-72px": "72px",
      },
    },
  },
  plugins: [],
};
