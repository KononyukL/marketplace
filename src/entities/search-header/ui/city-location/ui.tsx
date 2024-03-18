import { Fragment } from "react";
import { ComboboxOptions } from "@/shared/ui/combobox-options";
import { type ICity } from "@/shared/api/locations/types";
import { useTranslation } from "next-i18next";
import { Spinner } from "@/shared/ui/spinner";

interface ICityLocation {
  data?: ICity[];
}

export const CityLocation = ({ data }: ICityLocation) => {
  const { t } = useTranslation("common");
  return (
    <>
      {data ? (
        <>
          {" "}
          <h3 className="px-4 text-xs">{t("search.select-settlement")}</h3>
          {data?.map((city) => (
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
      ) : (
        <Spinner />
      )}
    </>
  );
};
