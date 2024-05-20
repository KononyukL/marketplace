import { useCallback, useMemo, useState } from "react";
import type { IFilters } from "@/shared/api/filters-category/types";
import { type ICity } from "@/shared/api/locations/types";

export function useLocationFilter(cities?: IFilters) {
  const [filterValue, setFilterValue] = useState("");

  const filterCity = (city: ICity, filterValue: string) => {
    const lowerCaseFilterValue = filterValue.toLowerCase();
    const matchesName = city.name.toLowerCase().includes(lowerCaseFilterValue);
    const matchesStateName = city.state_name
      .toLowerCase()
      .includes(lowerCaseFilterValue);

    return matchesName || matchesStateName;
  };

  const filteredCities = useMemo(() => {
    if (!cities?.cities) return [];
    return cities.cities.filter((city) => filterCity(city, filterValue));
  }, [cities, filterValue]);

  const onValue = useCallback((value: unknown) => {
    setFilterValue(value as string);
  }, []);

  return { filteredCities, onValue, filterValue };
}
