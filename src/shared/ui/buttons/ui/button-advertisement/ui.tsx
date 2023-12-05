import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";

export const ButtonAdvertisement = () => {
  const { t } = useTranslation("common");
  return (
    <Button size="xl" variant="primary">
      <Link className="flex justify-center gap-2" href="#">
        <Image src={"/images/plus.svg"} alt="Plus" width={24} height={24} />
        {t("button-advertisement")}
      </Link>
    </Button>
  );
};
