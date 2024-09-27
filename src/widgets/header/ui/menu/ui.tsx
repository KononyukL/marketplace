import { BurgerMenu } from "@/widgets/header/ui/burger-menu";
import Link from "next/link";

import { ButtonAdvertisement } from "@/shared/ui/buttons/ui/button-advertisement";

import { useTranslation } from "next-i18next";
import { SearchHeader } from "@/entities/search-header/ui";

export const Menu = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="m-auto flex  max-w-main md:flex-row items-center justify-between pb-6 pl-14 pr-14 pt-6 text-title sm:flex-col">
        <div className="flex flex-row  sm:my-6 md:my-0">
          <BurgerMenu />
          <nav className="flex gap-10 font-semibold ">
            <Link href="#" className="hover:text-primary-hover">
              {t("menu.selection")}
            </Link>
            <Link href="#" className="hover:text-primary">
              {t("menu.articles")}
            </Link>
          </nav>
        </div>

        <SearchHeader />
        <ButtonAdvertisement />
      </div>
    </div>
  );
};
