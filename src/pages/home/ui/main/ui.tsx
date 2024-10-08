import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { ButtonAdvertisement } from "@/shared/ui/buttons/ui/button-advertisement";

export const Main = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="relative mb-32 pt-3">
      <div className="relative z-10 m-auto max-w-main px-14 pb-36 pt-4 text-black">
        <div className="mt-20 flex items-center border-solid  text-black">
          <div className=" flex flex-col justify-center  gap-10">
            <h2 className=" mb-4 w-full  max-w-title text-5xl font-medium leading-snug text-title">
              {t("main.title")}
              <span className="text-primary"> {t("main.span")} </span>
              <br />
              {t("main.text-title")}
            </h2>
            <div className="flex gap-7">
              <ButtonAdvertisement />
              <Button size="md" variant="outline">
                <Link href="/registration">
                  {t("auth.button-register", { ns: "common" })}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/main-image.png"}
        alt="Animal"
        layout="fill"
        className="absolute "
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
