import Image from "next/image";
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
        <div>
          <div className="flex items-start justify-between">
            <div className="flex items-start justify-between gap-4">
              <p className="bg-primary px-2 py-1 text-xs text-white">
                {t("advertisement.top")}
              </p>
              <div className="mb-5 flex items-center gap-1">
                <Image
                  src="/images/clock.svg"
                  alt="Clock"
                  width={16}
                  height={16}
                />
                <p className="text-text-3">{date}</p>
              </div>
            </div>
            <Image
              src="/images/heart-black.svg"
              alt="Heart"
              width={28}
              height={28}
            />
          </div>
          <div className="mb-2 flex gap-6 text-xl font-medium">
            <p>{title}</p>
            <p>{prise ? `${prise} ${t("advertisement.uah")}` : ""}</p>
          </div>
          <div className="mb-4 flex gap-4">
            {favoriteAttributes.map((el) => (
              <p key={el.attribute_id} className="text-text-3">
                {el.group_title}:
                <span className="text-black"> {el.title} </span>
              </p>
            ))}
          </div>
          <p className="mb-4 w-full max-w-3xl ">
            {text.length > 300 ? text.slice(0, 300) + "..." : text}
          </p>
          <div className="mb-4 flex gap-2 text-additional">
            {attributes.map((el) => (
              <p key={el.attribute_id} className="rounded-tags-2 bg-tags px-2">
                {el.title}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center  gap-4 ">
          <UserAvatar userAvatarUrl={userAvatarUrl} author={author} />
          <div className="flex flex-col gap-1 ">
            <p className="text-text-3">{author ? author : "No name"}</p>
            <LocationSeller>
              {cityType}
              {city}
            </LocationSeller>
          </div>
          <div className="flex flex-col gap-1">
            <UserType userType={userType} />
            <p className="text-black">
              {t("advertisement.reviews")}: {reviewsCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
