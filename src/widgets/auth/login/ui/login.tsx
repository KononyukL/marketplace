import { LoginForm } from "@/widgets/auth/login/ui/login-form";
import { WelcomeBanner } from "@/widgets/auth/login/ui/welcome-banner";
import { FooterAuth } from "@/widgets/auth/footer";
import { useTranslation } from "next-i18next";

export const Login = () => {
  const { t } = useTranslation("common");

  return (
    <div className=" flex h-screen w-full bg-white">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">
            {t("auth.title-login")}
          </h2>
          <LoginForm />
          <FooterAuth
            title="auth.account-register"
            link="/registration"
            textLink="auth.button-register"
          />
        </div>
      </div>
    </div>
  );
};
