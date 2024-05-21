import {
  type ICategoriesFilters,
  type ICategoriesSearchFilters,
  type SORT_OPTIONS,
} from "@/shared/queries/search/types";
import { useCallback, useEffect, useMemo } from "react";
import type { ISortFilterOption } from "@/features/filters/sort-filter";
import { SORT_TITLES } from "@/shared/config";

interface ISortOptions {
  filters: ICategoriesSearchFilters;
  onCategoriesFiltersChange: (filters: ICategoriesFilters) => void;
}

export function useCategorySortFilterHook({
  filters,
  onCategoriesFiltersChange,
}: ISortOptions) {
  const sortFilter = useMemo(() => {
    return Object.entries(SORT_TITLES).map(([key, value]) => ({
      title: value,
      value: key as SORT_OPTIONS,
    }));
  }, []);

  const defaultSortValue = sortFilter[0];

  const sortSelected = useMemo(
    () =>
      sortFilter.find(({ value }) => value === filters.sortOption) ??
      defaultSortValue,
    [filters.sortOption],
  );

  const onSortChange = useCallback(
    (value: ISortFilterOption<SORT_OPTIONS>) => {
      onCategoriesFiltersChange({ ...filters, sortOption: value.value });
    },
    [onCategoriesFiltersChange, filters],
  );

  const onMainFilterChange = useCallback(
    (mainFilters: ICategoriesFilters) => {
      onCategoriesFiltersChange({ ...filters, ...mainFilters });
    },
    [onCategoriesFiltersChange, filters],
  );

  useEffect(() => {
    if (!filters.sortOption) {
      onSortChange(sortFilter[0]);
    }
  }, [filters, onSortChange]);

  return { sortSelected, sortFilter, onSortChange, onMainFilterChange };
}
