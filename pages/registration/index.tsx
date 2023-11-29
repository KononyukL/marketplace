import { Registration } from "@/widgets/auth/registration/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const RegistrationPage = () => {
  return <Registration />;
};

export default RegistrationPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
