import { useTranslation } from "react-i18next";
import { textTranslationKeys } from "./text-translation-keys";

export const PolicyComponent = () => {
  const { t } = useTranslation(["animalMarket"]);

  return (
    <>
      <p className="pb-6 font-medium">{t("privacy-policy.paragraphs.start")}</p>
      <p className="pb-3">{t("privacy-policy.paragraphs.start-one")}</p>
      <p>{t("privacy-policy.paragraphs.start-two")}</p>
      <p className="pb-6">{t("privacy-policy.paragraphs.start-three")}</p>
      <div className="list-decimal pb-6 text-base font-medium leading-relaxed text-primary">
        {textTranslationKeys.map((el, i) => (
          <div key={i}>
            <h3 className="pt-6 ">{`${i + 1}. ${t(el.title)}`}</h3>
            {el.subcategories &&
              el.subcategories.map((subEl, subI) => (
                <div key={subI} className="list-disc pt-3 ">
                  {!!subEl.subtitle && (
                    <h4>{`${i + 1}.${subI + 1}. ${t(subEl.subtitle)}`}</h4>
                  )}
                  {subEl.items && (
                    <ul className="text-gray-12 list-inside list-disc font-normal">
                      {subEl.items.map((item, itemI) => (
                        <li className="pl-2" key={itemI}>
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>

      <p className="pb-3">{t("privacy-policy.paragraphs.end-one")}</p>
      <p>{t("privacy-policy.paragraphs.end-two")}</p>
      <p>{t("privacy-policy.paragraphs.end-three")}</p>
    </>
  );
};
