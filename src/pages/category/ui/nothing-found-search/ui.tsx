import { useTranslation } from "next-i18next";
import { Button } from "@/shared/ui";
import Link from "next/link";

interface INothingFoundSearch {
  searchTerm?: string;
  locationName?: string;
}

export const NothingFoundSearch = ({
  searchTerm,
  locationName,
}: INothingFoundSearch) => {
  const { t } = useTranslation("categories");

  return (
    <div className="h-screen max-w-main text-black">
      <p className="mb-4 text-4xl font-medium">
        {t("nothing-found-search.on-request")} «{searchTerm}»
        {locationName
          ? ` ${t("nothing-found-search.in")} ${locationName} `
          : " "}
        {t("nothing-found-search.nothing-found")} :(
      </p>
      <p className="mb-10 text-xl font-medium">
        {t("nothing-found-search.text")}
      </p>
      <Button size="xl" variant="outline">
        <Link href="/">{t("nothing-found-search.back-main-page")}</Link>
      </Button>
    </div>
  );
};
