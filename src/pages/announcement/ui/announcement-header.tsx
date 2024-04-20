import { Icons } from "@/shared/config";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { LocationSeller } from "@/shared/ui/location-seller/ui";
import { type TLocales } from "@/shared/config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Button } from "@/shared/ui";

interface AdvertisementDetailsProps {
  title: string;
  ending: string;
  city: string;
  price: number;
  quantity: number;
  cityState: string;
}

export const AnnouncementHeader = ({
  title,
  ending,
  city,
  cityState,
  price,
  quantity,
}: AdvertisementDetailsProps) => {
  const { t } = useTranslation("announcement");

  const { locale = "ua" } = useRouter();

  const formattedDate = useDateFormat({
    date: ending,
    locale: locale as TLocales,
  });

  return (
    <div className="mb-8 flex flex-col gap-6 rounded-lg bg-white p-8">
      <div className="heart-icon-container flex items-center justify-between text-sm text-text-3">
        {t("header.published")} {formattedDate.toLowerCase()}
        <Icons.Heart className="[&_path]:stroke-text-title cursor-pointer [&_path]:stroke-[1.5]" />
      </div>
      <div className="text-text-3">
        <h2 className="mb-2 text-[28px] font-medium leading-9 text-title">
          {title}
        </h2>
        <LocationSeller>
          {city}, {cityState}
        </LocationSeller>
      </div>
      {quantity > 0 && (
        <p className="text-base text-additional">{t("header.in-stock")}</p>
      )}
      <p className="text-[28px] font-bold leading-9 text-title">
        {price} {t("header.currency")}
      </p>
      <Button variant="primary">{t("header.contact-button")}</Button>
    </div>
  );
};
