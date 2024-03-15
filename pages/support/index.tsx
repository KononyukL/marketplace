import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Support } from "@/pages/support";

const SupportPage = () => {
  return <Support />;
};

export default SupportPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
};
