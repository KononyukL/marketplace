import { LoginForm } from "@/widgets/auth/login/ui/login-form";
import { WelcomeBanner } from "@/widgets/auth/login/ui/welcome-banner";
import { FooterAuth } from "@/widgets/auth/footer";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { AuthSocialNetwork } from "@/widgets/auth/auth-social-networks";
import { Divider } from "@/widgets/auth/divider";

export const Login = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex min-h-screen w-full bg-white ">
      <WelcomeBanner />
      <div className="flex shrink grow basis-2/4 flex-col justify-center  ">
        <div className="m-auto w-full max-w-auth">
          <Link href="/">
            <Image
              className="mb-[70px]"
              src="/images/logo-auth.svg"
              alt="Logo"
              width={124}
              height={48}
            />
          </Link>
          <h2 className="mb-8  text-3xl font-medium text-black">
            {t("auth.title-login")}
          </h2>
          <LoginForm />
          <Divider />
          <AuthSocialNetwork />
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
