import React from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n";
import i18n from "i18next";

const languagesList = [
  {
    key: "en",
    value: "EN",
  },
  {
    key: "uk",
    value: "UA",
  },
];
const HomePage = () => {
  const { t } = useTranslation();
  const handleLangChange = React.useCallback(
    (lng: string) => async () => {
      const newLng = languages.find((item) => item === lng) || languages[0];

      await i18n.changeLanguage(newLng);
    },
    [i18n],
  );
  return (
    <div>
      <div>
        {languagesList.map((lang) => (
          <div key={lang.key} onClick={handleLangChange(lang.key)}>
            {lang.value}
          </div>
        ))}
      </div>
      {t("home")}
    </div>
  );
};

export default HomePage;
