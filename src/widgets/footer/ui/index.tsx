import { Nav } from "@/widgets/footer/ui/nav";
import Image from "next/image";
import {
  animalMarket,
  support,
  user,
} from "@/widgets/footer/ui/nav/footer-data";
import { Language } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className=" bg-title text-white">
      <div className="m-auto max-w-main p-14">
        <div className="mb-12 flex items-start justify-between">
          <div className="flex w-full max-w-footer justify-between gap-5">
            <Nav title="Animal Market" data={animalMarket} />
            <Nav title="Підтримка" data={support} />
            <Nav title="Користувачу" data={user} />
          </div>
          <Image src={"images/logo.svg"} alt="Logo" width={136} height={44} />
        </div>
        <div className="border-t-solid border-t-border-footer flex items-start justify-between border-t pt-8">
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
