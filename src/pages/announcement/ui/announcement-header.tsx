import { Icons } from "@/shared/config";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { LocationSeller } from "@/shared/ui/location-seller/ui";
import { type TLocales } from "@/shared/config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Button } from "@/shared/ui";
import { IAdvertisementDetails } from "@/shared/api/advertisement/types";

export const AnnouncementHeader = ({
  advertisement,
}: {
  advertisement: IAdvertisementDetails;
}) => {
  const { title, location, price, quantity, updated } = advertisement;
  const { city_name, state_name } = location;

  const { t } = useTranslation("announcement");

  const { locale = "ua" } = useRouter();

  const formattedDate = useDateFormat({
    date: updated,
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
          {city_name}, {state_name}
        </LocationSeller>
      </div>
      {quantity > 0 && (
        <p className="text-base text-additional">{t("header.in-stock")}</p>
      )}
      <p className="text-[28px] font-bold leading-9 text-title">
        {price} {t("header.currency")}
      </p>
      <Button variant="primary">{t("header.add-to-cart-btn")}</Button>
      <Button variant="outline" className="font-medium text-title">
        {t("header.contact-seller-btn")}
      </Button>
    </div>
  );
};
