import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Button } from "@/shared/ui";
import Link from "next/link";

export const TestPage = () => {
  const { t } = useTranslation(["categories"]);
  return (
    <>
      <div className=" relative mx-14 h-64 max-w-main px-8 pb-10 pt-12 text-black">
        <div className="text-title-2 max-w-test-text relative z-10 flex flex-col items-start gap-3 break-normal ">
          <h3 className="text-[28px] leading-snug">{t("test.title")}</h3>
          <p className="pb-2 text-base leading-relaxed">
            {t("test.text-title")}
          </p>
          <Button size="xsm" variant="outline" className="px-8 py-2 text-title">
            <Link href="#">{t("test.button")}</Link>
          </Button>
        </div>
        <Image src={"/images/category-dog.png"} alt="Dogs" fill />
      </div>
    </>
  );
};
