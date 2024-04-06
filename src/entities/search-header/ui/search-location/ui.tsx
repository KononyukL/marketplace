import { type ChangeEvent, useCallback, useMemo, useState } from "react";
import { Combobox } from "@headlessui/react";
import { type ICity } from "@/shared/api/locations/types";
import { Icons } from "@/shared/config";
import { Search } from "@/entities/search-header/ui/search";
import { useTranslation } from "next-i18next";
import { useController, useFormContext } from "react-hook-form";
import { CityLocation } from "@/entities/search-header/ui/city-location";
import { StateLocation } from "@/entities/search-header/ui/state-location";
import { StateCityLocation } from "@/entities/search-header/ui/state-city-location";
import {
  useGetCitiesByName,
  useGetCitiesStates,
  useGetCountryStates,
} from "./lib";

export interface IState {
  id: number;
  name: string;
}

interface ISearchLocation {
  name?: string;
  defaultLocation?: IState;
  onClear?: () => void;
}

export const SearchLocation = ({
  name = "location",
  defaultLocation,
  onClear,
}: ISearchLocation) => {
  const { t } = useTranslation("common");
  const [state, setState] = useState<IState>();
  const { data, searchCitiesByName, queryString } = useGetCitiesByName(
    defaultLocation?.name,
  );

  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue: {},
  });

  const { onChange: controlOnChange, value } = field;

  const { data: states } = useGetCountryStates();

  const onClickState = (state: IState) => () =>
    setState({ id: state.id, name: state.name });

  const { data: statesCities } = useGetCitiesStates(state?.id);

  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);

  const handleSave = ({ id, name }: ICity) => {
    setFocus(false);
    setState({ name: "", id: 0 });
    searchCitiesByName("");
    controlOnChange({ id, name });
  };

  const savedValue = useMemo(
    () => data?.find((location) => location.id === defaultLocation?.id),
    [defaultLocation, data],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchCitiesByName(event.target.value);
  };

  const displayValues = () => {
    if (!state?.id) {
      return (value.name as string) || queryString;
    }
    return "";
  };

  const onClearLocation = useCallback(() => {
    onClear?.();
    searchCitiesByName("");
  }, [onClear, searchCitiesByName]);

  const renderOptions = () => {
    if (focus && (queryString !== "" || defaultLocation?.name)) {
      return <CityLocation data={data} />;
    }

    if (!state?.id) {
      return <StateLocation states={states} onClickState={onClickState} />;
    }

    return (
      <StateCityLocation
        onClickState={onClickState}
        stateName={state.name}
        statesCities={statesCities}
      />
    );
  };

  return (
    <Search
      displayValue={displayValues}
      value={savedValue}
      handleSave={handleSave}
      onChange={onChange}
      placeholder={t("search.all-states")}
      icon={<Icons.Location />}
      onFocus={onFocus}
      disableClose={!!state?.id}
      querystring={queryString}
      stateId={value?.id}
      onClearLocation={onClearLocation}
    >
      <Combobox.Options className="absolute z-50 max-h-60 w-full overflow-auto rounded-b-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
        {data?.length === 0 && queryString !== "" ? (
          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
            {t("search.nothing-found")}
          </div>
        ) : (
          <div className="py-2">{renderOptions()}</div>
        )}
      </Combobox.Options>
    </Search>
  );
};
