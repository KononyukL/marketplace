import { useTranslation } from "next-i18next";
import { ButtonAuth } from "@/shared/ui/buttons/ui/button-auth";

export const AuthSocialNetwork = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col gap-6">
      <ButtonAuth
        src={"/images/facebook-logo.svg"}
        text={t("auth.auth-facebook")}
        alt="Facebook"
      />
      <ButtonAuth
        src={"/images/google-logo.svg"}
        text={t("auth.auth-google")}
        alt="Google"
      />
    </div>
  );
};
