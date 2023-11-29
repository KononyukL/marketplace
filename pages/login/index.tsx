import { Login } from "@/widgets/auth/login/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
