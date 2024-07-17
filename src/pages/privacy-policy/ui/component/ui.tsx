import { useTranslation } from "react-i18next";
import { textTranslationKeys } from "./text-translation-keys";

export const PolicyComponent = () => {
  const { t } = useTranslation(["animalMarket"]);

  return (
    <>
      <p className="pb-6 font-medium">{t("privacy-policy.paragraphs.start")}</p>
      <p className="pb-3">{t("privacy-policy.paragraphs.start-one")}</p>
      <p>
        {t("privacy-policy.paragraphs.start-two")}{" "}
        <span>
          <a
            href="https://teamchallenge.io"
            className="hover:text-primary-hover underline focus:text-primary"
          >
            https://teamchallenge.io/.
          </a>
        </span>
      </p>
      <p className="pb-6">
        {t("privacy-policy.paragraphs.start-three")}
        <span>
          <a
            href="https://staging-animalmarketplace-team.vercel.app"
            className="hover:text-primary-hover underline focus:text-primary"
          >
            https://staging-animalmarketplace-team.vercel.app/#
          </a>{" "}
          {t("privacy-policy.paragraphs.start-four")}
        </span>
      </p>
      <div className="text-title list-decimal pb-6 text-base font-medium leading-relaxed">
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
                    <ul className="text-text-secondary list-inside list-disc font-normal">
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
