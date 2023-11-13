import { BurgerMenu } from "@/widgets/header/ui/burger-menu";
import Link from "next/link";

import { ButtonAdvertisement } from "@/shared/ui/buttons/ui/button-advertisement";

export const Menu = () => {
  return (
    <div>
      <div className="m-auto flex max-w-main justify-between pb-4 pl-14 pr-14 pt-4 text-title">
        <BurgerMenu />
        <nav className="flex gap-10 font-semibold ">
          <Link href="#" className="hover:text-primary">
            Підбір тварини
          </Link>
          <Link href="#" className="hover:text-primary">
            Статті про тварин
          </Link>
        </nav>
        <ButtonAdvertisement />
      </div>
    </div>
  );
};
