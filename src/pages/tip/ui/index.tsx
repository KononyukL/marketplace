import { useTranslation } from "react-i18next";
import { TipComponent } from "./component";
import { SupportPages } from "@/shared/ui/support-pages";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { support as supportLink } from "@/widgets/footer/ui/nav/footer-data";

export const Tip = () => {
  const { t } = useTranslation(["common"]);
  const { asPath } = useRouter();
  const segments = asPath.split("/");

  const titleLink = supportLink.find((title) => asPath === title.link);

  const segmentTitle = titleLink?.title ?? "";

  return (
    <>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link")}
        segmentTitle={t(segmentTitle)}
      />
      <SupportPages title={t("footer.support.title-three")}>
        <TipComponent />
      </SupportPages>
    </>
  );
};
