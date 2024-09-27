import Link from "next/link";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { Icons } from "@/shared/config";

export const ButtonAdvertisement = () => {
  const { t } = useTranslation("common");
  return (
    <Button size="xl" variant="primary" className=" sm:mt-4 md:mt-0">
      <Link className="flex justify-center gap-2 text-white " href="#">
        <Icons.Plus />
        {t("button-advertisement")}
      </Link>
    </Button>
  );
};
