import { useGetAdvertisement } from "@/shared/queries/advertisement";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { useRouter } from "next/router";
import { SliderComponent } from "./slider";
import { AnnouncementHeader } from "./announcement-header";
import { useTranslation } from "next-i18next";

export const Announcement = () => {
  const { t } = useTranslation("announcement");
  const { locale, query } = useRouter();

  const { data: advertisement } = useGetAdvertisement({
    langCode: locale || DEFAULT_LOCALE,
    id: parseInt(query.id as string),
  });

  if (!advertisement) {
    return (
      <div className="m-auto max-w-main p-14 text-black">{t("not-found")}</div>
    );
  }

  return (
    <div className="m-auto max-w-main px-14">
      Breadcrumbs
      <div className="mt-8 flex justify-between gap-8">
        <div className="w-2/3">
          <SliderComponent images={advertisement.images} />
          <div className="mt-8 rounded-lg bg-white p-8">
            Announcement main info
          </div>
          <div className="mt-8 rounded-lg bg-white p-8">Tips component</div>
        </div>
        <div className="w-1/3">
          <AnnouncementHeader
            title={advertisement.title}
            city={advertisement.location.city_name}
            price={advertisement.price}
            quantity={advertisement.quantity}
            cityState={advertisement.location.state_name}
            ending={advertisement.updated}
          />
          <div className="rounded-lg bg-white p-8">About seller info</div>
        </div>
      </div>
      <div className="mt-20 bg-white p-12 text-center">Seller reviews</div>
    </div>
  );
};
