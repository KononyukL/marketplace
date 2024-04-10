import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";

export const ButtonBuy = () => {
  const { t } = useTranslation("announcement");
  return <Button variant="primary">{t("header.button-buy")}</Button>;
};
