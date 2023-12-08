import Link from "next/link";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { Icons } from "@/shared/config";

export const ButtonAdvertisement = () => {
  const { t } = useTranslation("common");
  return (
    <Button size="xl" variant="primary">
      <Link className="flex justify-center gap-2 text-white" href="#">
        <Icons.Plus />
        {t("button-advertisement")}
      </Link>
    </Button>
  );
};
