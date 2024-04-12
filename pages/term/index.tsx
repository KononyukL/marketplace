import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

import { Term } from "@/pages/term";

const TermsOfUsePage = () => {
  return <Term />;
};
export default TermsOfUsePage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "animalMarket"])),
    },
  };
};
