import { useTranslation } from "react-i18next";
import { TipsComponent } from "./component";
import { SupportPages } from "@/shared/ui/support-pages";
import { useRouter } from "next/router";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { support } from "@/widgets/footer/ui/nav/footer-data";

export const Tips = () => {
  const { t } = useTranslation(["common"]);
  const { asPath } = useRouter();
  const segments = asPath.split("/");
  const data = support;

  const titleLink = data.find((title) => asPath === title.link);

  const segmentTitle = titleLink?.title as string;
  console.log(`titleLink`, segmentTitle);
  return (
    <>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link")}
        segmentTitle={segmentTitle}
      />
      <SupportPages title={t("footer.support.title-three")}>
        <TipsComponent />
      </SupportPages>
    </>
  );
};
