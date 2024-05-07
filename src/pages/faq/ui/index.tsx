import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { supportLinks } from "@/shared/config";
import { FaqComponent } from "./component";
import { FooterPages } from "@/shared/ui/footer-pages";

export const Faq = () => {
  const { t } = useTranslation(["common"]);
  const { asPath } = useRouter();
  const segments = asPath.split("/");

  const titleLink = supportLinks.find((title) => asPath === title.link);

  const segmentTitle = titleLink?.translationKey ?? "";

  return (
    <>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link")}
        segmentTitle={t(segmentTitle)}
      />
      <FooterPages title={t(segmentTitle)}>
        <FaqComponent />
      </FooterPages>
    </>
  );
};
