import { useTranslation } from "react-i18next";
import { textTranslationKeys } from "./text-translation-keys";

export const PolicyComponent = () => {
  const { t } = useTranslation(["animalMarket"]);

  return (
    <>
      <p className="pb-6 font-medium">{t("privacy-policy.paragraphs.start")}</p>
      <p className="pb-3">
        {t("privacy-policy.paragraphs.start-one")}
        <br />
        {t("privacy-policy.paragraphs.start-two")}
      </p>
      <p className="pb-6">{t("privacy-policy.paragraphs.start-three")}</p>
      <div className="list-decimal pl-5 text-base font-medium">
        {textTranslationKeys.map((el, i) => (
          <div key={i}>
            <h3 className="pb-6 ">{`${i + 1}. ${t(el.title)}`}</h3>
            {el.subcategories &&
              el.subcategories.map((subEl, subI) => (
                <div key={subI} className="list-disc pt-3 font-normal">
                  {"subtitle" in subEl && subEl.subtitle && (
                    <h4 className="pb-6 ">
                      {`${i + 1}.${subI + 1}. ${t(subEl.subtitle)}`}
                    </h4>
                  )}
                  {subEl.items && (
                    <ul className="list-disc">
                      {subEl.items.map((item, itemI) => (
                        <li key={itemI}>{t(item)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>

      <p>{t("privacy-policy.paragraphs.end-one")}</p>
      <p>
        {t("privacy-policy.paragraphs.end-two")}
        <br />
        {t("privacy-policy.paragraphs.end-three")}
      </p>
    </>
  );
};
