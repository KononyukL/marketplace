import Image from "next/image";
import {
  type IAttribute,
  type IImage,
} from "@/shared/api/advertisement-favorite/types";
import { AdvertisementPhotos } from "@/shared/ui/advertisement-photo";
import { useTranslation } from "next-i18next";

interface IAdvertisement {
  img: IImage[];
  status: string;
  title: string;
  prise: number;
  gender?: string;
  age?: string;
  text: string;
  author: string;
  city: string;
  cityType: string;
  reviewsCount: number;
  attributes: IAttribute[];
}

export const Advertisement = ({
  img,
  status,
  city,
  cityType,
  author,
  text,
  age,
  gender,
  prise,
  title,
  reviewsCount,
  attributes,
}: IAdvertisement) => {
  const { t } = useTranslation("home");

  return (
    <div className=" flex gap-6 rounded-lg bg-white p-8 text-black shadow-box">
      <AdvertisementPhotos img={img} />
      <div className="flex-1">
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
              <p className="text-text-3">{status}</p>
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
          <p>
            {prise} {t("advertisement.uah")}
          </p>
        </div>
        <div className="mb-4 flex gap-4">
          <p className="text-text-3">
            {t("advertisement.gender")}:
            <span className="text-black"> {gender} </span>
          </p>
          <p className="text-text-3">
            {t("advertisement.age")}:<span className="text-black">{age} </span>
          </p>
        </div>
        <p className="mb-4 w-full max-w-3xl ">{text}</p>
        <div className="mb-4 flex gap-2 text-additional">
          {attributes.map((el) => (
            <p key={el.attribute_id} className="rounded-tags-2 bg-tags px-2">
              {el.title}
            </p>
          ))}
        </div>
        <div className="flex items-center  gap-4 ">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-additional text-white">
            {author[0].toLocaleUpperCase()}
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="text-text-3">{author}</p>
            <div className="flex items-center">
              <Image
                src="/images/location-black.svg"
                alt="Location"
                width={16}
                height={16}
              />
              {cityType}
              {city}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex ">
              <Image
                src="/images/private-announcement.svg"
                alt="Location"
                width={16}
                height={16}
              />
              <p className="text-text-4">Приватне оголошення</p>
            </div>
            <p>
              {reviewsCount} {t("advertisement.reviews")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
