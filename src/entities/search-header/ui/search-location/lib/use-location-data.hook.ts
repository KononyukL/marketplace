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
}

export const useLocationData = ({
  selectedStateId,
  defaultLocation,
  name,
  onClear,
  control,
}: useLocationDataProps) => {
  const {
    data: cities,
    searchCitiesByName,
    queryString,
  } = useGetCitiesByName(defaultLocation?.name);

  const { data: states } = useGetCountryStates();
  const { data: stateCities } = useGetCitiesStates(selectedStateId);

  const { field } = useController({ name, control, defaultValue: {} });
  const { onChange: onFieldChange, value: fieldValue } = field;

  const selectedCity = useMemo(
    () => cities?.find((city) => city.id === defaultLocation?.id) ?? null,
    [defaultLocation, cities],
  );

  const setSelectedLocation = ({ id, name }: ICity) => {
    searchCitiesByName("");
    onFieldChange({ id, name });
  };

  const getDisplayValue = () => {
    if (!selectedStateId) {
      return (fieldValue.name as string) || queryString;
    }
    return "";
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchCitiesByName(event.target.value);
  };

  const handleClearLocation = useCallback(() => {
    if (onClear) {
      onClear();
    }
    searchCitiesByName("");
  }, [onClear, searchCitiesByName]);

  return {
    data: {
      cities,
      states,
      stateCities,
      queryString,
      selectedCity,
      fieldValueId: fieldValue.id,
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
