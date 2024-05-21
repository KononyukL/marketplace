import { useCallback, useState } from "react";
import type { IBreeds } from "@/shared/api/filters-category/types";

export interface IBreedFilter {
  breeds?: IBreeds[];
}

export function useBreadFilter(breeds?: IBreeds[]) {
  const [filterValue, setFilterValue] = useState("");

  const filteredBreed =
    breeds?.filter((item) =>
      item.title.toLowerCase().includes(filterValue.toLowerCase()),
    ) ?? [];

  const onValue = useCallback((value: unknown) => {
    setFilterValue(value as string);
  }, []);

  return { filteredBreed, onValue, filterValue };
}
