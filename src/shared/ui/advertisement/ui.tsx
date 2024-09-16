import {
  type IAttribute,
  type IImage,
} from "@/shared/api/advertisement-favorite/types";
import { AdvertisementPhotos } from "@/shared/ui/advertisement-photo";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { LocationSeller, UserAvatar, UserType } from "@/shared/ui";
import { REVIEWED_ADS_KEY_LS, type TLocales } from "@/shared/config";
import { useRouter as useNavigationRouter } from "next/navigation";
import { TemplateCard } from "../template-card/ui";
import { useLocalStorage } from "@/shared/hooks/use-localStorage-state";

interface IAdvertisement {
  img: IImage[];
  ending: string;
  title: string;
  prise: number;
  text: string;
  author: string;
  city: string;
  cityType: string;
  reviewsCount: number;
  attributes: IAttribute[];
  favoriteAttributes: IAttribute[];
  userAvatarUrl: string;
  userType?: string;
  id: number;
  top?: boolean;
}

type ReviewedAd = {
  id: number;
  timestamp: number; 
};

export const Advertisement = ({
  img,
  ending,
  city,
  cityType,
  author,
  text,
  prise,
  title,
  reviewsCount,
  attributes,
  favoriteAttributes,
  userAvatarUrl,
  userType,
  id,
  top,
}: IAdvertisement) => {
  const { t } = useTranslation("home");
  const { locale = "ua" } = useRouter();
  const date = useDateFormat({ date: ending, locale: locale as TLocales });
  const router = useNavigationRouter();

  const [reviewedAds, setReviewedAds] = useLocalStorage<ReviewedAd[]>(
    REVIEWED_ADS_KEY_LS,
    [],
  );

  const onClickAdvertisement = (id: number) => {
    const currentTime = Date.now();

    const adAlreadyReviewed = reviewedAds.some((el) => el.id === id);

    if (!adAlreadyReviewed) {
      setReviewedAds((reviewedAds) => {
        const updatedAds = [...reviewedAds, { id, timestamp: currentTime }];

        if (updatedAds.length > 100) {
          const sortedAds = updatedAds.sort(
            (a, b) => b.timestamp - a.timestamp,
          );
          return sortedAds.slice(0, 100);
        }

        return updatedAds;
      });
    }
    router.push(`/announcement/${id}`);
  };

  return (
    <div
      onClick={() => {
        onClickAdvertisement(id);
      }}
      className="flex cursor-pointer gap-6 rounded-lg bg-white p-8 text-black shadow-box"
    >
      <AdvertisementPhotos img={img} />
      <div className="flex flex-1 flex-col justify-between">
        <TemplateCard
          top={top}
          date={date}
          title={title}
          prise={prise}
          favoriteAttributes={favoriteAttributes}
          text={text}
          attributes={attributes}
          size="lg"
        />
        <div className="flex items-center  gap-4 ">
          <UserAvatar
            userAvatarUrl={userAvatarUrl}
            author={author}
            className="h-9 w-9"
          />
          <div className="flex flex-col gap-1 ">
            <p className="text-text-3">{author ?? "No name"}</p>
            <LocationSeller width={13}>
              {cityType}
              {city}
            </LocationSeller>
          </div>
          <div className="flex flex-col gap-1">
            <UserType userType={userType} className="text-text-4" />
            <p className="text-text-3">
              {t("advertisement.reviews")}: {reviewsCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
