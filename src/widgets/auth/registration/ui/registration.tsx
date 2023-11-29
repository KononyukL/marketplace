import { RegistrationForm } from "./registration-form";
import { WelcomeBanner } from "./welcome-banner";
import { FooterAuth } from "@/widgets/auth/footer";
import { useTranslation } from "next-i18next";

export const Registration = () => {
  const { t } = useTranslation("common");

  return (
    <div className=" flex min-h-screen w-full bg-white">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <h2 className="mb-10  text-4xl font-bold text-black">
            {t("auth.register")}
          </h2>
          <RegistrationForm />
          <FooterAuth
            link="/login"
            title="auth.account-login"
            textLink="auth.login"
          />
        </div>
      </div>
    </div>
  );
};
