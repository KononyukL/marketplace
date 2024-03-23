import { useTranslation } from "react-i18next";
import { data } from "./data";

export const TipComponent = () => {
  const { t } = useTranslation(["support"]);

  return (
    <>
      <div className="px-support py-8 text-justify">
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
