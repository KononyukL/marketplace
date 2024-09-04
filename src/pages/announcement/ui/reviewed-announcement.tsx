import { useTranslation } from "react-i18next";

export const ReviewedAnnouncement = () => {
  const { t } = useTranslation("announcement");
  return (
    <div className="mt-32">
      <h2 className="mb-8 text-header-secondary font-medium leading-9 text-title">
        {t("reviewed-ads.header")}
      </h2>
    </div>
  );
};
