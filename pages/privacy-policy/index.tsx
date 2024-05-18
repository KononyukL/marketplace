import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { PrivacyPolicy } from "@/pages/privacy-policy";

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};
export default PrivacyPolicyPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "animalMarket"])),
    },
  };
};
