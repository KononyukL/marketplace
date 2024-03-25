import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export { Announcement as default } from "@/pages/announcement";

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const paths = locales?.map((locale) => ({
    params: { id: "404" },
    locale,
  }));

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};
