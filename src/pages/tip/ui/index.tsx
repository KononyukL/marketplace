import { useTranslation } from "react-i18next";
import { TipComponent } from "./component";
import { SupportPages } from "@/shared/ui/support-pages";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { supportLinks } from "@/shared/config";

export const Tip = () => {
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
      <SupportPages title={t(segmentTitle)}>
        <TipComponent />
      </SupportPages>
    </>
  );
};
