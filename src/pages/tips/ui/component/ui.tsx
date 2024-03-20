import { useTranslation } from "react-i18next";

export interface IData {
  list: string;
}
const data: IData[] = [
  { list: "tips.list.list-one" },
  { list: "tips.list.list-two" },
  { list: "tips.list.list-three" },
  { list: "tips.list.list-four" },
  { list: "tips.list.list-five" },
  { list: "tips.list.list-six" },
];

export const TipsComponent = () => {
  const { t } = useTranslation(["support"]);

  return (
    <>
      <div className="px-[72px] py-8 text-justify">
        <p className="pb-6">{t("tips.paragraphs.start")}</p>
        <ol className="list-decimal pl-5">
          {data.map((el, i) => (
            <li key={i} className="pb-6">
              {t(el.list)}
            </li>
          ))}
        </ol>
        <p>{t("tips.paragraphs.end")}</p>
      </div>
    </>
  );
};
