import { HomePage } from "@/pages/home";
import { useAuth } from "@/shared/queries/auth/useAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { type GetStaticProps } from "next";

export default function Home() {
  // TODO move it to index file
  useAuth();

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
