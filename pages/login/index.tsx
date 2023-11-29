import { Login } from "@/widgets/auth/login/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { type TGetStaticProps } from "@/shared/config";

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

export async function getStaticProps({ locale }: TGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
