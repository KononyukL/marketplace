import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { useTranslation } from "next-i18next";

export const AnimalShelter = () => {
  const { t } = useTranslation("common");

  return (
    <div className="m-auto max-w-main p-14 text-black">
      <div className="border-borede-2 max-w-primary  flex justify-between rounded-lg border-2 border-solid bg-white pb-12 pl-14 pr-14 pt-12 text-black">
        <div className=" flex flex-col justify-center gap-10">
          <div>
            <h3 className=" mb-4 text-3xl font-bold">
              {t("animal-shelter.title")}
            </h3>
            <p className="text-lg text-text">{t("animal-shelter.text")}</p>
          </div>
          <Button size="lg">
            <Link href="/registration">{t("auth.button-register")}</Link>
          </Button>
        </div>
        <div>
          <Image
            src={"/images/animal-shelter-image.png"}
            alt="Animal"
            width={600}
            height={405}
          />
        </div>
      </div>
    </div>
  );
};
