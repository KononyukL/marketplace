import { Combobox } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import { useFormContext } from "react-hook-form";
import { CityLocation } from "@/entities/search-header/ui/city-location";
import { StateLocation } from "@/entities/search-header/ui/state-location";
import { StateCityLocation } from "@/entities/search-header/ui/state-city-location";
import { useLocationData, useLocationState } from "./lib";
import { type IState } from "@/shared/queries/search/types";
import { LocationSearchDropdown } from "../location-search-dropdown";

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
  const { control } = useFormContext();

  const {
    selectedState,
    isInputFocused,
    handleStateSelection,
    handleInputFocus,
  } = useLocationState(defaultLocation);

  const { data, utilityFunctions, isLoading } = useLocationData({
    selectedStateId: selectedState?.id,
    defaultLocation,
    onClear,
    name,
    control,
    handleStateSelection,
  });

  const renderLocationOptions = () => {
    const isStateSelectionAvailable =
      isInputFocused && (data.queryString !== "" || defaultLocation?.name);
    const isStateCitySelectionAvailable = !selectedState?.id;

    if (isStateSelectionAvailable) {
      return <CityLocation data={data.cities} isLoading={isLoading.cities} />;
    } else if (isStateCitySelectionAvailable) {
      return (
        <StateLocation
          states={data.states}
          handleStateSelection={handleStateSelection}
          isLoading={isLoading.states}
        />
      );
    } else {
      return (
        <StateCityLocation
          handleStateSelection={handleStateSelection}
          stateName={selectedState.name}
          stateCities={data.stateCities}
          isLoading={isLoading.stateCities}
        />
      );
    }
  };

  const shouldShowNoResultsMessage =
    data.cities?.length === 0 && data.queryString !== "";

  const isLoadingData =
    isLoading.cities || isLoading.states || isLoading.stateCities;

  return (
    <LocationSearchDropdown
      displayValue={utilityFunctions.getDisplayValue}
      value={data.selectedCity}
      setSelectedLocation={utilityFunctions.setSelectedLocation}
      onChange={utilityFunctions.handleInputChange}
      placeholder={t("search.all-states")}
      onFocus={handleInputFocus}
      forceDropdownOpen={!!selectedState?.id}
      querystring={data.queryString}
      stateId={data.fieldValueId}
      onClearLocation={utilityFunctions.handleClearLocation}
    >
      <Combobox.Options className="absolute z-50 max-h-60 w-full overflow-auto rounded-b-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
        {shouldShowNoResultsMessage && !isLoadingData ? (
          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
            {t("search.nothing-found")}
          </div>
        ) : (
          <div className="py-2">{renderLocationOptions()}</div>
        )}
      </Combobox.Options>
    </LocationSearchDropdown>
  );
};
