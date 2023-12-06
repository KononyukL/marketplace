import Image from "next/image";
import Link from "next/link";
import { Language } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { SVGRS } from "@/shared/config";

export const Head = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-black">
      <div className="m-auto flex max-w-main  justify-between pb-4 pl-14 pr-14 pt-4">
        <Link href="/">
          <Image src={"/images/logo.svg"} alt="Logo" width={86} height={28} />
        </Link>
        <div className="flex gap-11 ">
          <div>
            <Link
              href="/login"
              className="flex gap-1 text-white hover:text-primary"
            >
              <SVGRS.User />
              {t("auth.login")}
            </Link>
          </div>
          <div className="flex  gap-4 ">
            <SVGRS.Heart className="cursor-pointer text-white hover:text-primary" />
            <SVGRS.ShoppingIcon className="cursor-pointer text-white hover:text-primary" />
          </div>
          <Language />
        </div>
      </div>
    </div>
  );
};
