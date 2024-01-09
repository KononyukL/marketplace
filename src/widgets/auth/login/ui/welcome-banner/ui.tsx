import Image from "next/image";
import { useTranslation } from "next-i18next";

export const WelcomeBanner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative shrink grow basis-2/4 text-white">
      <div className="relative z-10 min-h-screen ">
        <h2 className="text-auth-title pt-14 text-center font-bold leading-tight">
          {t("auth.welcome-banner-login")}
        </h2>
      </div>
      <Image
        src={"/images/login-image.png"}
        alt="Login"
        fill
        objectFit="cover"
      />
    </div>
  );
};
