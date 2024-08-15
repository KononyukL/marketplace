import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { AboutUs } from "@/pages/about-us";

const AboutUsPage = () => {
  return <AboutUs />;
};
export default AboutUsPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "animalMarket"])),
    },
  };
};
