/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        strokeBlue: "#4200FF",
        grayText: "#CACACA",
        blackText: "#1A1A1A",
        blueGray: "#64748B",
        error: "#EE0004",
      },
      color: {},
      borderColor: {
        darkBlue: "#20056D",
        error: "#EE0004",
        strokeBlue: "#4200FF",
      },

      boxShadow: {
        lightError: " 0px 2px 2px #F79495, 0px 0px 0px 4px #F79495",
        purpleFocus: "0px 2px 2px #C8B4FF, 0px 0px 0px 4px #C8B4FF",
      },
      backgroundColor: {
        buttonAuth: "#1E1D1D",
      },
      maxWidth: {
        auth: "426px",
      },
    },
  },
  plugins: [],
};
