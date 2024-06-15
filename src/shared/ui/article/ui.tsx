import Image from "next/image";
import { useTranslation } from "next-i18next";
import { type IAttributes } from "@/shared/api/blog/types";
import { format } from "date-fns";

interface IArticle {
  date: string;
  img: string;
  time: number;
  title: string;
  text: string;
  attributes: IAttributes[];
}

export const Article = ({
  date,
  time,
  title,
  text,
  img,
  attributes,
}: IArticle) => {
  const { t } = useTranslation("home");

  const formHour = format(new Date(date), "dd.MM.yyyy");

  return (
    <div className="max-w-how-it-worktext-black w-full shadow-box">
      <div className=" flex flex-col rounded-lg  bg-white p-4 ">
        <div>
          {img ? (
            <Image
              src={img}
              className="h-44 rounded object-cover"
              alt="Foto Article"
              width={283}
              height={177}
            />
          ) : (
            <div className="h-44 max-w-article rounded bg-disable"></div>
          )}
        </div>
        <div className=" mt-3 w-full ">
          <div className="mb-2  flex gap-3 text-sm text-text-3">
            <p>{formHour}</p>
            <p>
              {t("articles.read")} {time} Хв
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">
              {title.length > 15 && text.slice(0, 30) + "..."}
            </h3>
            <p className="min-h-article text-sm  text-text-3">
              {text.length > 150 && text.slice(0, 140) + "..."}
            </p>
          </div>
          <div className="mb-2  flex h-6 gap-2 text-additional">
            {attributes &&
              attributes?.map((el) => (
                <p key={el.id} className="rounded-tags-2 bg-tags px-2">
                  {el.title}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
