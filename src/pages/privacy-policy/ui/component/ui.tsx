import { useTranslation } from "react-i18next";
// import { textTranslationKeys } from "./text-translation-keys";

export const PolicyComponent = () => {
  const { t } = useTranslation(["animalMarket"]);

  return (
    <>
      <p className="pb-6 font-medium">{t("privacy-policy.paragraphs.start")}</p>
      <p className="pb-3">{t("privacy-policy.paragraphs.start-one")}</p>
      <p className="pb-6">{t("privacy-policy.paragraphs.start-two")}</p>
      {/* <ol className="list-decimal pl-5 text-base font-medium">
          {textTranslationKeys.map((el, i) => (
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
        </ol> */}
      <p>{t("privacy-policy.paragraphs.end-one")}</p>
      <p>
        {t("privacy-policy.paragraphs.end-two")}
        <br />
        {t("privacy-policy.paragraphs.end-three")}
      </p>
    </>
  );
};
