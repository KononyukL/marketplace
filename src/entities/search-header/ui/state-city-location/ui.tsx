import { ComboboxOptions } from "@/shared/ui/combobox-options";
import { type ICity } from "@/shared/api/locations/types";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Spinner } from "@/shared/ui/spinner";
import { type IState } from "@/shared/queries/search/types";

interface IStateCityLocation {
  stateCities?: ICity[];
  handleStateSelection: ({ id, name }: IState) => () => void;
  stateName: string;
  isLoading?: boolean;
}

export const StateCityLocation = ({
  stateCities,
  handleStateSelection,
  stateName,
  isLoading,
}: IStateCityLocation) => {
  const { t } = useTranslation("common");

  if (isLoading) {
    return <Spinner />;
  }

  if (!stateCities || stateCities.length === 0) {
    return (
      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
        {t("search.nothing-found")}
      </div>
    );
  }

  return (
    <>
      <div
        className="flex cursor-pointer gap-1 px-4 py-2 text-black"
        onClick={handleStateSelection({ id: 0, name: "" })}
      >
        <Image
          className="rotate-180"
          src="/images/arrow-search.svg"
          alt="Arrow"
          width={8}
          height={4}
        />
        {t("search.back")}
      </div>
      <div className="px-4">
        <h3 className="text-black">{stateName}</h3>
        <p className="text-xs text-text-3">{t("search.entire-area")}</p>
      </div>
      <p className="mt-2 px-4 text-xs font-semibold text-black ">
        {t("search.select-settlement")}
      </p>
      {stateCities.map((stateCity) => (
        <ComboboxOptions key={stateCity.id} value={stateCity}>
          <div className="mr-2 px-4 py-2">
            <p className="text-black">{stateCity.name}</p>
            <p className="text-text-3 ">{stateCity.city_type_title}</p>
          </div>
        </ComboboxOptions>
      ))}
    </>
  );
};
