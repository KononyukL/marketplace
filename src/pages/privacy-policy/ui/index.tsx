import { useTranslation } from "react-i18next";

import { useRouter } from "next/router";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { FooterPages } from "@/shared/ui/footer-pages";
import { animalMarketLinks } from "@/shared/config";
import { PolicyComponent } from "./component";

export const PrivacyPolicy = () => {
  const { t } = useTranslation(["common"]);
  const { asPath } = useRouter();
  const segments = asPath.split("/");

  const titleLink = animalMarketLinks.find((title) => asPath === title.link);

  const segmentTitle = titleLink?.translationKey ?? "";

  return (
    <>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link")}
        segmentTitle={t(segmentTitle)}
      />
      <FooterPages title={t(segmentTitle)} variant="primary">
        <PolicyComponent />
      </FooterPages>
    </>
  );
};
