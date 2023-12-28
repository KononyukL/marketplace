/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "ua",
    locales: ["ua", "en"],
    localeDetection: false,
  },
  localePath: require("path").resolve("./public/locales"),
};
