import Image from "next/image";
import Link from "next/link";
import { Language } from "@/shared/ui";
import { useTranslation } from "next-i18next";

export const Head = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-black">
      <div className="m-auto flex max-w-main  justify-between pb-4 pl-14 pr-14 pt-4">
        <Image src={"/images/logo.svg"} alt="Logo" width={86} height={28} />
        <div className="flex gap-11 ">
          <div>
            <Link
              href="/login"
              className="flex gap-1 text-white hover:text-primary"
            >
              <Image
                className=" fill-current hover:text-primary"
                src={"/images/user.svg"}
                alt="User"
                width={26}
                height={24}
              />
              {t("auth.login")}
            </Link>
          </div>
          <div className="flex gap-4">
            <Image
              className="cursor-pointer"
              src={"/images/heart.svg"}
              alt="Heart"
              width={24}
              height={26}
            />
            <Image
              className="cursor-pointer"
              src={"/images/icon-shopping.svg"}
              alt="Shopping"
              width={24}
              height={26}
            />
          </div>
          <Language />
        </div>
      </div>
    </div>
  );
};
