import { Registration } from "@/widgets/auth/registration/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { type TGetStaticProps } from "@/shared/config";

const RegistrationPage = () => {
  return <Registration />;
};

export default RegistrationPage;

export async function getStaticProps({ locale }: TGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
