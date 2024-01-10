import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { dateTimeFormat } from "@/shared/config/convert-string-to-date-time";

interface IArticle {
  date: string;
  img?: string;
  time: number;
  title: string;
  text: string;
}

export const Article = ({ date, time, title, text }: IArticle) => {
  const { locale } = useRouter();

  const { t } = useTranslation("home");

  return (
    <div className="max-w-how-it-worktext-black w-full shadow-box">
      <div className=" flex flex-col rounded-lg  bg-white p-4 ">
        <div>
          <Image
            src="/images/animal-shelter-image.png"
            alt="foto"
            width={283}
            height={177}
          />
        </div>
        <div className=" w-full  rounded-b-lg ">
          <div className="mt-3 flex gap-2 text-additional">
            <p className="rounded-tags-2 bg-tags px-2">котики</p>
            <p className="rounded-tags-2 bg-tags px-2">котики</p>
            <p className="rounded-tags-2 bg-tags px-2">котики</p>
          </div>
          <div className="mb-2 mt-2 flex gap-3 text-sm text-text-3">
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
