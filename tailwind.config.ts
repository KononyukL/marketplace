import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#10182880", //rgba(16, 24, 40, 0.5)
        primary: "#101828",

        "secondary-light": "#FF7100cc", // rgba(255, 113, 0, 0.80)
        secondary: "#FF7100",
        "secondary-dark": "#D96000", // #ff7100, rgba(0, 0, 0, 0.15);

        "teal-0": "#2A907F", //additional
        "teal-1": "#2a907fe6", //rgba(42, 144, 127, 0.9)
        "teal-2": "#247a6c", // #2a907f, rgba(0, 0, 0, 0.15);
        "teal-3": "#2a907fb3", // rgba(42,144, 127, 0,7)
        "teal-4": "#2a907f30", // rgba(42, 144, 127, 0.19) tags

        "blue-0": "#0D71A8", //text-4
        "blue-1": "#4200FF", //tertiary
        "blue-2": "#20056D", //input-2

        "pink-0": "#F79495",
        "pink-1": "#FF8D8F",
        "pink-2": "#ff5457e6", // rgba(255, 84, 87, 0.9)
        "pink-3": "#d9474a", // #ff5457, rgba(0, 0, 0, 0.15)
        error: "#EE0004",

        "gray-0": "#FFFEFE", //fill
        "gray-1": "#edeeee",
        "gray-2": "#CACFDD", //text-2
        "gray-3": "#CACACA", //input
        "gray-4": "#C4C4C4", //border-2
        "gray-5": "#BBBABA", //disable
        "gray-6": "#C8B4FF",
        "gray-7": "#8D8A8A", //border-auth
        "gray-8": "#757982", //text-3
        "gray-9": "#64748B", //tertiary-2
        "gray-10": "#93b2e040", //button-scroll rgba(147, 178, 224, 0.25)
        "gray-11": "#434242", //text
        "gray-12": "#444444", //text-secondary
        "gray-13": "#8E99B533", //border-footer
        "gray-14": "#89898926", //rgba(137, 137, 137, 0.15)

        "dark-0": "#00000026", //"rgba(0, 0, 0, 0,15)" tags
        "dark-1": "#0000000a", //hover
        "dark-2": "#1e0b0182", // register
        "dark-3": "#1E1D1D", //secondary
        "dark-4": "#1A1A1A", //label
      },
      boxShadow: {
        "input-error": "0px 2px 2px #F79495, 0px 0px 0px 4px #F79495",
        "input-focus": "0px 2px 2px #C8B4FF, 0px 0px 0px 4px #C8B4FF",
        box: "0px 0px 60px 0px rgba(137, 137, 137, 0.15)",
        "button-scroll": " 0px 6px 40px 0px rgba(147, 178, 224, 0.25)",
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
        "button-1": "119px",
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
        "footer-pages": "874px",
        "categories-header": "517px",
        "review-text-box": "604px",
        article: "284px",
      },
      width: {
        search: "484px",
        features: "18px",
        "sort-filter": "160px",
        "rating-box": "604px",
        "rating-list": "397px",
      },
      minHeight: {
        article: "100px",
        category: "1056px",
      },
      height: {
        border: "26px",
        title: "48px",
        image: "150px",
        "image-advertisement": "300px",
        features: "18px",
        "rating-list": "210px",
      },
      maxHeight: {
        photo: "168px",
        "photo-2": "360px",
        "image-2": "150px",
      },
      fontSize: {
        "auth-title": "45px",
        "rating-number": "58px",
        "header-secondary": "28px",
      },
      margin: {
        bottom: "248px",
      },
      padding: {
        "footer-pages": "72px",
        "rating-box": "28.5px",
        "button-scroll": "68px",
      },
      lineHeight: {
        rating: "68px",
      },
      borderWidth: {
        "border-secondary": "1.5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
