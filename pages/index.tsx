import { HomePage } from "@/pages/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { type GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};
