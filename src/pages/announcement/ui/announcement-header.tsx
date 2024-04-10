import { Icons } from "@/shared/config";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { ButtonBuy } from "@/shared/ui/buttons/ui/button-buy";
import { LocationSeller } from "@/shared/ui/location-seller/ui";
import { type TLocales } from "@/shared/config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
      <div className="flex items-center justify-between text-text-3">
        {t("header.published")} {formattedDate}
        <Icons.Heart className="heart-icon cursor-pointer" />
      </div>
      <div className="text-text-3">
        <h2 className="mb-2 text-[28px] font-medium leading-9  text-title">
          {title}
        </h2>
        <LocationSeller className="location-icon">
          {city}, {cityState}
        </LocationSeller>
      </div>
      <p className="text-[16px] text-additional">
        {quantity > 0 && t("header.in-stock")}
      </p>
      <p className="text-[28px] font-bold text-title">
        {price} {t("header.currency")}
      </p>
      <ButtonBuy />
    </div>
  );
};
