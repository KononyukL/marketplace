import { useTranslation } from "next-i18next";

interface ISearchResults {
  adsNumber?: number;
  searchTerm?: string;
  locationName?: string;
}

export const SearchResults = ({
  adsNumber,
  searchTerm,
  locationName,
}: ISearchResults) => {
  const { t } = useTranslation("categories");

  return (
    <div className="h-screen max-w-main text-black">
      <p className="mb-4 text-4xl font-medium">
        {t("nothing-found-search.search-results")} «{searchTerm}»
        {locationName
          ? ` ${t("nothing-found-search.in")} ${locationName} `
          : " "}
      </p>
      <p className="mb-10 text-xl font-medium">
        {t("nothing-found-search.found")} {adsNumber}{" "}
        {t("nothing-found-search.ads")}
      </p>
    </div>
  );
};
