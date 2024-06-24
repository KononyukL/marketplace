import {
  type IAttribute,
  type IImage,
} from "@/shared/api/advertisement-favorite/types";
import { AdvertisementPhotos } from "@/shared/ui/advertisement-photo";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { LocationSeller, UserAvatar, UserType } from "@/shared/ui";
import { type TLocales } from "@/shared/config";
import { useRouter as useNavigationRouter } from "next/navigation";
import { TemplateCard } from "../template-card/ui";

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

  const onClickAdvertisement = () => router.push(`/announcement/${id}`);

  return (
    <div
      onClick={onClickAdvertisement}
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
            <p className="text-gray-8">{author ?? "No name"}</p>
            <LocationSeller width={13}>
              {cityType}
              {city}
            </LocationSeller>
          </div>
          <div className="flex flex-col gap-1">
            <UserType userType={userType} className="text-blue-0" />
            <p className="text-gray-8">
              {t("advertisement.reviews")}: {reviewsCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
