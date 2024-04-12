import { useTranslation } from "react-i18next";
import { data } from "./data";

export const TermComponent = () => {
  const { t } = useTranslation(["animalMarket"]);

  return (
    <>
      <div className="px-support py-8 text-justify">
        <p className="pb-3">{t("terms-of-use.paragraphs.start-one")}</p>
        <p className="pb-6">{t("terms-of-use.paragraphs.start-two")}</p>
        <ol className="list-decimal pl-5 text-base font-medium">
          {data.map((el, i) => (
            <li key={i} className="pb-6 ">
              {t(el.title)}
              {el.items && (
                <ul className="list-disc pt-3 font-normal">
                  {el.items.map((item, i) => (
                    <li key={i}>{t(item)}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
        <p>
          {t("terms-of-use.paragraphs.end-one")}
          <br />
          {t("terms-of-use.paragraphs.end-two")}
        </p>
      </div>
    </>
  );
};
