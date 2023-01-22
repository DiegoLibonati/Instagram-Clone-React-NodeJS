/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logos: "url('./assets/logos2.png')",
        mobile: "url('./auth/assets/mobile.png')",
      },
      backgroundPosition: {
        instagramLogo: "0px 4px",
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
    },
  },
  plugins: [],
};
