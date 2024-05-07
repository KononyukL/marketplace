import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

const PrivacyPolicyPage = () => {
  // return < />;
};
export default PrivacyPolicyPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "animalMarket"])),
    },
  };
};
