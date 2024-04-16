import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Faq } from "@/pages/faq";

const TermsOfUsePage = () => {
  return <Faq />;
};
export default TermsOfUsePage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
};
