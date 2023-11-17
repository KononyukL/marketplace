import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7100",
        secondary: "#1E1D1D",
        tertiary: "#4200FF",
        "tertiary-2": "#64748B",
        input: "#CACACA",
        "input-2": "#20056D",
        label: "#1A1A1A",
        error: "#EE0004",
        text: "#434242",
        title: "#101828",
        "text-2": "#CACFDD",
        border: "#8E99B533",
      },
      boxShadow: {
        "input-error": "0px 2px 2px #F79495, 0px 0px 0px 4px #F79495",
        "input-focus": "0px 2px 2px #C8B4FF, 0px 0px 0px 4px #C8B4FF",
      },
      backgroundColor: {
        register: "rgba(30, 11, 1, 0.51)",
      },
      maxWidth: {
        main: "1440px",
        auth: "426px",
        registerTitle: "615px",
        registerText: "430px",
        registerComment: "424px",
        button: "200px",
        "button-2": "244px",
        title: "564px",
        categories: "1090px",
        footer: "985px",
      },
      height: {
        border: "26px",
      },
    },
  },
  plugins: [],
} satisfies Config;
