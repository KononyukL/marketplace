import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7100",
        "primary-hover": "rgba(255, 113, 0, 0.80)",
        secondary: "#1E1D1D",
        additional: "#2A907F",
        tertiary: "#4200FF",
        "tertiary-2": "#64748B",
        input: "#CACACA",
        "input-2": "#20056D",
        label: "#1A1A1A",
        error: "#EE0004",
        text: "#434242",
        title: "#101828",
        "text-2": "#CACFDD",
        "border-footer": "#8E99B533",
        "border-2": "#C4C4C4",
        "text-3": "#757982",
        "text-4": "#0D71A8",
        "border-auth": "#8D8A8A",
      },

      boxShadow: {
        "input-error": "0px 2px 2px #F79495, 0px 0px 0px 4px #F79495",
        "input-focus": "0px 2px 2px #C8B4FF, 0px 0px 0px 4px #C8B4FF",
        box: "0px 0px 60px 0px rgba(137, 137, 137, 0.15)",
        "button-scroll": " 0px 6px 40px 0px rgba(147, 178, 224, 0.25)",
      },
      backgroundColor: {
        register: "rgba(30, 11, 1, 0.51)",
        tags: "rgba(42, 144, 127, 0.19)",
      },
      borderRadius: {
        tags: "20px",
        "tags-2": "30px",
      },
      maxWidth: {
        main: "1440px",
        auth: "426px",
        registerTitle: "643px",
        registerText: "382px",
        registerComment: "424px",
        button: "158px",
        "button-2": "178px",
        "button-3": "204px",
        "button-4": "244px",
        title: "564px",
        categories: "1090px",
        footer: "985px",
        advantages: "428px",
        "advantages-text": "330px",
        "how-it-work-text": "264px",
        "how-it-work": "316px",
        "article-text": "282px",
        "advertisement-photo": "390px",
      },
      minHeight: {
        article: "100px",
      },
      height: {
        border: "26px",
        title: "48px",
      },
      maxHeight: {
        photo: "168px",
        "photo-2": "360px",
      },
      fontSize: {
        "auth-title": "45px",
      },
    },
  },
  plugins: [],
} satisfies Config;
