import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { useRouter } from "next/router";
import { AnnouncementHeader } from "./announcement-header";
import { useTranslation } from "next-i18next";
import { useGetAdvertisement } from "../lib/use-get-advertisement.hook";
import { SellerInfo } from "./seller-info";
import { AnnouncementMainInfo } from "./announcement-main-info";
import { SliderComponent } from "@/shared/ui/slider";
import { SellerReviews } from "./seller-reviews";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { TipsInfo } from "./tips-info";

export const Announcement = () => {
  const { t } = useTranslation(["announcement", "common", "support"]);
  const { locale, query } = useRouter();

  const { data: advertisement } = useGetAdvertisement({
    langCode: locale || DEFAULT_LOCALE,
    id: parseInt(query.id as string),
  });

  const segments: string[] = [
    "",
    `${t("breadcrumbs-link", { ns: "announcement" })}`,
    "",
  ];

  if (!advertisement) {
    return (
      <div className="m-auto max-w-main p-14 text-black">{t("not-found")}</div>
    );
  }

  return (
    <>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link", { ns: "common" })}
        segmentTitle={advertisement?.title}
      />{" "}
      <div className="m-auto max-w-main px-14">
        <div className="flex justify-between gap-8">
          <div className="w-2/3 flex-wrap">
            <SliderComponent images={advertisement.images} />
            <AnnouncementMainInfo advertisement={advertisement} />
            <TipsInfo />
          </div>
          <div className="w-1/3">
            <AnnouncementHeader advertisement={advertisement} />
            <SellerInfo advertisement={advertisement} />
          </div>
        </div>
        <SellerReviews />
      </div>
    </>
  );
};
