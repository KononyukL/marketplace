import { useTranslation } from "react-i18next";
import { Nav } from "@/widgets/footer/ui/nav";
import Image from "next/image";
import { Language } from "@/shared/ui";
import { animalMarketLinks, supportLinks, userLinks } from "@/shared/config";

export const Footer = () => {
  const { t } = useTranslation(["common"]);

  return (
    <footer className=" bg-title text-white">
      <div className="m-auto max-w-main p-14">
        <div className="mb-12 flex items-start justify-between">
          <div className="flex w-full max-w-footer justify-between gap-5">
            <Nav
              title={t("footer.animal-market.title")}
              data={animalMarketLinks}
            />
            <Nav title={t("footer.support.title")} data={supportLinks} />
            <Nav title={t("footer.user.title")} data={userLinks} />
          </div>
          <Image src={"images/logo.svg"} alt="Logo" width={136} height={44} />
        </div>
        <div className="border-t-solid flex items-start justify-between border-t border-t-border-footer pt-8">
          <p>
            animalmarketplace.com.ua
            <span className="text-text-2">&#169; All rights reserved 2024</span>
          </p>
          <Language />
        </div>
      </div>
    </footer>
  );
};
