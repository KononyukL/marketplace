import { useTranslation } from "react-i18next";
import { textTranslationKeys } from "./text-translation-keys";

export const TermComponent = () => {
  const { t } = useTranslation(["animalMarket"]);

  return (
    <>
      <p>{t("terms-of-use.paragraphs.start-one")}</p>
      <p className="pb-3">
        {t("terms-of-use.paragraphs.start-two")}
        <span>
          <a
            href="https://teamchallenge.io"
            className="underline hover:text-primary-hover focus:text-primary"
          >
            https://teamchallenge.io/.
          </a>
        </span>
      </p>

      <p className="pb-6">{t("terms-of-use.paragraphs.start-three")}</p>
      {/* <link href="https://teamchallenge.io/" /> */}
      <ol className="list-decimal pl-5 text-base font-medium">
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
      </ol>
      <p>
        {t("terms-of-use.paragraphs.end-one")}
        <br />
        {t("terms-of-use.paragraphs.end-two")}
      </p>
    </>
  );
};
