import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { Categories } from "@/pages/home/ui/main/categories";
import { useTranslation } from "next-i18next";
import { ButtonAdvertisement } from "@/shared/ui/buttons/ui/button-advertisement";

export const Main = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="relative ">
      <div className=" relative z-10 m-auto max-w-main px-14 pb-36 pt-4 text-black">
        <Categories />
        <div className="flex items-center border-solid  text-black">
          <div className=" flex flex-col justify-center gap-10">
            <h2 className=" mb-4 w-full  max-w-title text-5xl font-medium leading-snug text-title">
              {t("main.title")}
              <span className="text-primary"> {t("main.span")} </span>
              <br />
              {t("main.text-title")}
            </h2>
            <div className="flex gap-7">
              <ButtonAdvertisement />
              {/* TODO: Replace 'max-w-button' className with a new size option in the Button component's 'size' prop
            Implement additional size style within the Button component to maintain styling consistency
          and remove direct style/class overrides in usage */}
              <Button className="max-w-button " variant="outline">
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
        className="absolute"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
