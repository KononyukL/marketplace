import Image from "next/image";
import Link from "next/link";
import { Language } from "@/shared/ui";
import { Icons } from "@/shared/config";
import { AuthProfile } from "@/widgets/header/ui/auth-profile";

export const Head = () => {
  return (
    <div className="relative z-[99] bg-title ">
      <div className="m-auto flex max-w-main  justify-between pb-4 pl-14 pr-14 pt-4">
        <Link href="/">
          <Image src={"/images/logo.svg"} alt="Logo" width={86} height={28} />
        </Link>
        <div className="flex gap-11 ">
          <div>
            <AuthProfile />
          </div>
          <div className="flex  gap-4 ">
            <Icons.Heart className="cursor-pointer text-white hover:text-primary hover:transition-all" />
            <Icons.ShoppingIcon className="cursor-pointer text-white hover:text-primary hover:transition-all" />
          </div>
          <Language />
        </div>
      </div>
    </div>
  );
};
