import { useTranslation } from "react-i18next";

import { SupportPages } from "@/shared/ui/support-pages";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { animalMarket as data } from "@/widgets/footer/ui/nav/footer-data";
import { TermComponent } from "./component";

export const Term = () => {
  const { t } = useTranslation(["common"]);
  const { asPath } = useRouter();
  const segments = asPath.split("/");

  const titleLink = data.find((title) => asPath === title.link);

  const segmentTitle = titleLink?.title ?? "";

  return (
    <>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link")}
        segmentTitle={t(segmentTitle)}
      />
      <SupportPages title={t("footer.animal-market.title-three")}>
        <TermComponent />
      </SupportPages>
    </>
  );
};
