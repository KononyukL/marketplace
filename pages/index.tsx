import { HomePage } from "@/pages/home";
import { useAuth } from "@/shared/queries/auth/useAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  // TODO move it to index file
  useAuth();

  return (
    <>
      <HomePage />
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
