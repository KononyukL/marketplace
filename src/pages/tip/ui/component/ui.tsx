import { useTranslation } from "react-i18next";
import { textTranslationKeys } from "./text-translation-keys";

export const TipComponent = () => {
  const { t } = useTranslation(["support"]);

  return (
    <>
      <p className="pb-6">{t("tips.paragraphs.start")}</p>
      <ol className="list-decimal pl-5">
        {textTranslationKeys.map((el, i) => (
          <li key={i} className="pb-6">
            {t(el.list)}
          </li>
        ))}
      </ol>
      <p>{t("tips.paragraphs.end")}</p>
    </>
  );
};
