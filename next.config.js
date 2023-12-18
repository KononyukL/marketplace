/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "petmarket.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/advertisements/images/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
        {
          loader: "file-loader",
          options: {
            name: "static/[path][name].[ext]",
          },
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });
    return config;
  },
};

module.exports = nextConfig;
