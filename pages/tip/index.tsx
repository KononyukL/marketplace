import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Tip } from "@/pages/tip/ui";

const TipPage = () => {
  return <Tip />;
};
export default TipPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "support"])),
    },
  };
};
