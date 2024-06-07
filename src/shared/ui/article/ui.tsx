import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { dateTimeFormat } from "@/shared/config/convert-string-to-date-time";
import { type IAttributes } from "@/shared/api/blog/types";

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
  const { locale } = useRouter();
  const { t } = useTranslation("home");

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
            <div className="max-w-article h-44 rounded bg-disable"></div>
          )}
        </div>
        <div className=" w-full ">
          <div className="mb-2 mt-3 flex h-6 gap-2 text-additional">
            {attributes &&
              attributes?.map((el) => (
                <p key={el.id} className="rounded-tags-2 bg-tags px-2">
                  {el.title}
                </p>
              ))}
          </div>
          <div className="mb-2  flex gap-3 text-sm text-text-3">
            <p>{dateTimeFormat(date, locale)}</p>
            <p>
              {t("articles.read")} {time} Хв
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className=" h-title font-medium">{title}</h3>
            <p className="min-h-article  text-sm">
              {text.length > 150 && text.slice(0, 150) + "..."}
            </p>
            <div className="mr-10 flex items-end justify-end">
              <Link className="hover:text-primary-hover" href="/blog">
                {t("articles.read-more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
