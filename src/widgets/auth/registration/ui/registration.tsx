import { RegistrationForm } from "./registration-form";
import { WelcomeBanner } from "./welcome-banner";
import { FooterAuth } from "@/widgets/auth/footer";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { AuthSocialNetwork } from "@/widgets/auth/auth-social-networks";
import { Divider } from "@/widgets/auth/divider";

export const Registration = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex min-h-screen w-full bg-white">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center ">
        <div className="m-auto w-full max-w-auth">
          <Link href="/">
            <Image
              className="m-auto mb-16"
              src="/images/logo-auth.svg"
              alt="Logo"
              width={142}
              height={48}
            />
          </Link>
          <h2 className="mb-10 text-center text-4xl font-bold text-black">
            {t("auth.register")}
          </h2>
          <RegistrationForm />
          <Divider />
          <AuthSocialNetwork />
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
