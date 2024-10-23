import { Fragment } from "react";
import { ComboboxOptions } from "@/shared/ui/combobox-options";
import { type ICity } from "@/shared/api/locations/types";
import { useTranslation } from "next-i18next";
import { Spinner } from "@/shared/ui/spinner";

interface ICityLocation {
  data?: ICity[];
  isLoading?: boolean;
}

export const CityLocation = ({ data, isLoading }: ICityLocation) => {
  const { t } = useTranslation("common");

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
        {t("search.nothing-found")}
      </div>
    );
  }

  return (
    <>
      <h3 className="px-4 text-xs">{t("search.select-settlement")}</h3>
      {data.map((city) => (
        <ComboboxOptions key={city.id} value={city}>
          <div className="group px-4 py-2">
            <p>{city.name}</p>
            <div className="text-text-3 group-hover:text-black">
              <p>
                {city.city_type_title}, {city.state_name},
              </p>
              <p>{city.district_name}</p>
            </div>
          </div>
        </ComboboxOptions>
      ))}
    </>
  );
};
