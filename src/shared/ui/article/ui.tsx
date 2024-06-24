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
            <div className="bg-gray-5 h-44 max-w-article rounded"></div>
          )}
        </div>
        <div className=" mt-3 w-full ">
          <div className="text-gray-8  mb-2 flex gap-3 text-sm">
            <p>{formHour}</p>
            <p>
              {t("articles.read")} {time} Хв
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">
              {title.length > 15 && text.slice(0, 30) + "..."}
            </h3>
            <p className="text-gray-8 min-h-article  text-sm">
              {text.length > 150 && text.slice(0, 140) + "..."}
            </p>
          </div>
          <div className="text-teal-0  mb-2 flex h-6 gap-2">
            {attributes &&
              attributes?.map((el) => (
                <p key={el.id} className="bg-teal-4 rounded-tags-2 px-2">
                  {el.title}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
