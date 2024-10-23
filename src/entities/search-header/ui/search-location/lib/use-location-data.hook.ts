import { type Control, useController } from "react-hook-form";
import { useGetCitiesByName, useGetCountryStates, useGetCitiesStates } from ".";
import { type ICity } from "@/shared/api/locations/types";
import { useCallback, useMemo } from "react";
import { type IState } from "@/shared/queries/search/types";

interface useLocationDataProps {
  selectedStateId: number | undefined;
  defaultLocation?: IState;
  name: string;
  control: Control;
  onClear?: () => void;
  handleStateSelection: (state: IState | null) => () => void;
}

export const useLocationData = ({
  selectedStateId,
  defaultLocation,
  name,
  onClear,
  control,
  handleStateSelection,
}: useLocationDataProps) => {
  const {
    data: cities,
    searchCitiesByName,
    queryString,
    isLoading: isLoadingCities,
  } = useGetCitiesByName(defaultLocation?.name);

  const { data: states, isLoading: isLoadingStates } = useGetCountryStates();
  const { data: stateCities, isLoading: isLoadingStateCities } =
    useGetCitiesStates(selectedStateId);

  const { field } = useController({ name, control, defaultValue: {} });
  const { onChange: onFieldChange, value: fieldValue } = field;

  const selectedCity = useMemo(
    () => cities?.find((city) => city.id === defaultLocation?.id) ?? null,
    [defaultLocation, cities],
  );

  const setSelectedLocation = ({ id, name }: ICity) => {
    searchCitiesByName("");
    onFieldChange({ id, name });
    handleStateSelection(null)();
  };

  const getDisplayValue = () => {
    if (!selectedStateId) {
      return (fieldValue.name as string) || queryString;
    }
    return "";
  };

  const handleClearLocation = useCallback(
    (e?: React.SyntheticEvent) => {
      e?.stopPropagation();

      if (onClear) {
        onClear();
      }
      searchCitiesByName("");
    },
    [onClear, searchCitiesByName],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    searchCitiesByName(value);

    if (!value) {
      handleClearLocation();
    }
  };

  return {
    data: {
      cities,
      states,
      stateCities,
      queryString,
      selectedCity,
      fieldValueId: fieldValue.id,
    },
    isLoading: {
      cities: isLoadingCities,
      states: isLoadingStates,
      stateCities: isLoadingStateCities,
    },
    utilityFunctions: {
      setSelectedLocation,
      getDisplayValue,
      searchCitiesByName,
      handleInputChange,
      handleClearLocation,
    },
  };
};
