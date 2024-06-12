import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";

export const AnimalShelter = () => {
  const { t } = useTranslation("common");

  return (
    <div className="m-auto mb-48 max-w-main p-14 ">
      <div className="relative  shrink grow   text-white">
        <div className=" max-w-primary relative z-10 flex justify-between px-16 py-16 text-white">
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h3 className="mb-4 text-3xl font-bold">
                {t("animal-shelter.title")}
              </h3>
              <p className="text-lg">{t("animal-shelter.text")}</p>
            </div>
            <Button size="lg">
              <Link href="/registration">{t("auth.button-register")}</Link>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={"/images/image-shelter.png"}
            className="rounded-lg"
            alt="Animal"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};
