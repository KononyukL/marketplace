import { useTranslation } from "next-i18next";

export const Divider = () => {
  const { t } = useTranslation("common");

  return (
    <div className="my-8 flex items-center gap-5 ">
      <div className="border-b-border-auth w-full border border-solid"></div>
      <p className="text-border-auth">{t("auth.or")}</p>
      <div className="border-b-border-auth w-full border border-solid"></div>
    </div>
  );
};
