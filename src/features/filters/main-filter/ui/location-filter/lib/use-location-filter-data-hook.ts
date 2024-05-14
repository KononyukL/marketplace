import { useCallback, useState } from "react";
import type { IFilters } from "@/shared/api/filters-category/types";

export function useLocationFilter(cities?: IFilters) {
  const [filterValue, setFilterValue] = useState("");

  const filteredBreed =
    cities?.cities.filter(
      (item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.state_name.toLowerCase().includes(filterValue.toLowerCase()),
    ) ?? [];

  const onValue = useCallback((value: unknown) => {
    setFilterValue(value as string);
  }, []);

  return { filteredBreed, onValue, filterValue };
}
