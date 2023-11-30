import { Registration } from "@/widgets/auth/registration/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

const RegistrationPage = () => {
  return <Registration />;
};

export default RegistrationPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
