import { useTranslation } from "next-i18next";
import { Button } from "@/shared/ui";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";

interface ICategoryHeader {
  segmentTitle?: string;
}

export const CategoryHeader = ({
  segmentTitle,
  children,
}: React.PropsWithChildren<ICategoryHeader>) => {
  const { t } = useTranslation(["categories", "common"]);
  const segments = ["", ""];

  return (
    <div>
      <Breadcrumbs
        segments={segments}
        startingTitle={t("menu.start-link", { ns: "common" })}
        segmentTitle={`${t("header.category")} ${segmentTitle}`}
      />
      <div className="relative mx-14 h-64 max-w-main px-8 pb-10 pt-12 text-white">
        <div className="text-title-2 relative z-10 flex max-w-categories-header flex-col items-start gap-3 break-normal ">
          <h3 className="text-[28px] leading-snug">{t("header.title")}</h3>
          <p className="pb-2 text-base leading-relaxed">
            {t("header.text-title")}
          </p>
          <Button size="xsm" variant="outline" className="px-8 py-2 text-title">
            <Link href="#">{t("header.button")}</Link>
          </Button>
        </div>
        <Image src={"/images/category-header.png"} alt="Dogs" fill />
      </div>
      {children}
    </div>
  );
};
