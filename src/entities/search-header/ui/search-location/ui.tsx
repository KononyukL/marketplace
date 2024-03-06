import { type ChangeEvent, useMemo, useState } from "react";
import { Combobox } from "@headlessui/react";
import {
  useGetCitiesByName,
  useGetCountryStates,
  useGetStatesCities,
} from "@/shared/queries/locations";
import useSaveInURL from "@/shared/hooks/use-save-in-url";
import { type ICity } from "@/shared/api/locations/types";
import { Icons } from "@/shared/config";
import { Search } from "@/entities/search-header/ui/search";
import { ComboboxOptions } from "@/shared/ui/combobox-options";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useController, useFormContext } from "react-hook-form";

export interface IState {
  id: number;
  name: string;
}

export const SearchLocation = ({ name = "location" }) => {
  const { t } = useTranslation("common");
  const { savedData: savedLocation, onSave } = useSaveInURL<{
    id: number;
    name: string;
  }>(name);
  const [state, setState] = useState<IState>();
  const { data, searchCitiesByName, queryString } = useGetCitiesByName(
    savedLocation?.name,
  );

  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  const { onChange: controlOnChange } = field;

  const { data: states } = useGetCountryStates(1);

  const onClickState = (state: IState) => () =>
    setState({ id: state.id, name: state.name });

  const { data: statesCities } = useGetStatesCities(state?.id);

  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);

  const handleSave = ({ id, name }: ICity) => {
    onSave({ id, name });
    setFocus(false);
    setState({ name: "", id: 0 });
    controlOnChange({ id, name });
  };

  const savedValue = useMemo(
    () => data?.find((location) => location.id === savedLocation?.id),
    [savedLocation, data],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchCitiesByName(event.target.value);
    if (savedLocation) {
      onSave();
    }
  };

  const displayValues = (item: ICity) => {
    if (!state?.id) {
      return item.name || queryString;
    }
    return "";
  };

  const renderOptions = () => {
    if (focus && (queryString !== "" || savedLocation?.name)) {
      return (
        <>
          <h3 className="px-4 text-xs">{t("search.select-settlement")}</h3>
          {data?.map((city) => (
            <ComboboxOptions key={city.id} value={city}>
              <div className="group">
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
    }

    if (!state?.id) {
      return (
        <>
          <div className="px-4">
            <h3>{t("search.all-states")}</h3>
            <p className="text-xs text-text-3">{t("search.all-ads")}</p>
          </div>
          <p className="mt-2 px-4 text-xs ">{t("search.select-area")}</p>
          {states?.map((state) => (
            <ComboboxOptions key={state.id} value={state} disabled>
              <div
                className="mr-2 flex items-center justify-between"
                onClick={onClickState(state)}
              >
                <p>{state.name}</p>
                <Image
                  src="/images/arrow-search.svg"
                  alt="Arrow"
                  width={8}
                  height={4}
                />
              </div>
            </ComboboxOptions>
          ))}
        </>
      );
    }

    return (
      <>
        <div
          className="flex cursor-pointer gap-1 px-4 py-2"
          onClick={onClickState({ id: 0, name: "" })}
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
          <h3 className="font-medium">{state.name}</h3>
          <p className="text-xs text-text-3">{t("search.entire-area")}</p>
        </div>
        <p className="mt-2 px-4 text-xs font-semibold ">
          {t("search.select-settlement")}
        </p>
        {statesCities?.map((stateCity) => (
          <ComboboxOptions key={stateCity.id} value={stateCity}>
            <div className="group mr-2">
              <p>{stateCity.name}</p>
              <p className="text-text-3 group-hover:text-black">
                {stateCity.city_type_title}
              </p>
            </div>
          </ComboboxOptions>
        ))}
      </>
    );
  };

  return (
    <Search
      displayValue={displayValues}
      value={savedValue}
      handleSave={handleSave}
      onChange={onChange}
      placeholder="Уся Україна"
      icon={<Icons.Location />}
      onFocus={onFocus}
      disableClose={!!state?.id}
      querystring={queryString}
    >
      <Combobox.Options className="absolute z-50 max-h-60 w-full overflow-auto rounded-b-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
        {data?.length === 0 && queryString !== "" ? (
          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
            Nothing found.
          </div>
        ) : (
          <div className=" py-2">{renderOptions()}</div>
        )}
      </Combobox.Options>
    </Search>
  );
};
