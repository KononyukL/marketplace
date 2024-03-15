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

export const Tips = () => {
  const { t } = useTranslation(["support", "common"]);

  return (
    <>
      <div className="m-auto mb-[248px] w-[874px] bg-white">
        <div className="border-b border-text-2 px-[72px] py-8">
          <h4 className="text-xl font-medium leading-relaxed">
            {t("footer.support.title-three", { ns: "common" })}
          </h4>
        </div>
        <div className="px-[72px] py-8 text-justify">
          <p className="pb-6">{t("tips.paragraphs.start")}</p>
          <ol className="list-decimal px-5">
            {data.map((el, i) => (
              <li key={i} className="pb-6">
                {t(el.list)}
              </li>
            ))}
          </ol>
          <p>{t("tips.paragraphs.end")}</p>
        </div>
      </div>
    </>
  );
};
