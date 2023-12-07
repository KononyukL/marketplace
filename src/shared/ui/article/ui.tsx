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
    <div className="w-full max-w-how-it-work text-black ">
      <div className=" flex  flex-col rounded-lg  bg-white ">
        <div>
          <Image
            className="max-w-full rounded-b-none"
            src="/images/animal-shelter-image.png"
            alt="foto"
            width={315}
            height={175}
          />
        </div>
        <div className=" w-full rounded-b-lg border border-solid border-additional px-4 pb-6 pt-3">
          <div className="mb-2 flex gap-3 text-sm text-text-3">
            <p>{dateTimeFormat(date, locale)}</p>
            <p>
              {t("articles.read")} {time} Хв
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className=" h-title text-xl font-medium">{title}</h3>
            <p className="min-h-article max-w-[283px]">
              {text.length > 150 && text.slice(0, 150) + "..."}
            </p>
            <div className="mr-10 flex items-end justify-end">
              <Link className="hover:text-primary-hover" href="#">
                {t("articles.read-more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
