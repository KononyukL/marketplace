import Link from "next/link";
import { useTranslation } from "next-i18next";

export interface ILinkData {
  translationKey: string;
  link: string;
}

interface INav {
  title: string;
  data: ILinkData[];
}
export const Nav = ({ title, data }: INav) => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full ">
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>
      <div className="flex flex-col gap-2">
        {data.map((el, i) => (
          <Link
            key={i}
            className="text-text-2 transition-all hover:text-primary"
            href={el.link}
          >
            {t(el.translationKey)}
          </Link>
        ))}
      </div>
    </div>
  );
};
