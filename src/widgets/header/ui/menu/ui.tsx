import { BurgerMenu } from "@/widgets/header/ui/burger-menu";
import Link from "next/link";

import { ButtonAdvertisement } from "@/shared/ui/buttons/ui/button-advertisement";
import { Search } from "@/widgets/header/ui/search";

export const Menu = () => {
  return (
    <div>
      <div className="m-auto flex max-w-main items-center justify-between pb-6 pl-14 pr-14 pt-6 text-title">
        <BurgerMenu />
        <nav className="flex gap-10 font-semibold ">
          <Link href="#" className="hover:text-primary">
            Підбір тварини
          </Link>
          <Link href="#" className="hover:text-primary">
            Статті про тварин
          </Link>
        </nav>
        <Search />
        <ButtonAdvertisement />
      </div>
    </div>
  );
};
