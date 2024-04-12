import { useTranslation } from "next-i18next";
import { Gender } from "@/features/filters/ui/gender";

export const Filters = () => {
  const { t } = useTranslation("categories");

  return (
    <div className="p-14 ">
      <div className=" w-full max-w-[320px]  bg-white p-6">
        <h3 className="mb-4 text-xl">{t("filters-categories.filters")}</h3>
        <div className=" flex flex-col items-center">
          <Gender />
        </div>
      </div>
    </div>
  );
};
