import Link from "next/link";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { SVGRS } from "@/shared/config";

export const ButtonAdvertisement = () => {
  const { t } = useTranslation("common");
  return (
    <Button size="xl" variant="primary">
      <Link className="flex justify-center gap-2 text-white" href="#">
        <SVGRS.Plus />
        {t("button-advertisement")}
      </Link>
    </Button>
  );
};
