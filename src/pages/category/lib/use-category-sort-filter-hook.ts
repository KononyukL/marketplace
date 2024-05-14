import {
  type ICategoriesFilters,
  type ICategoriesSearchFilters,
  SORT_OPTIONS,
} from "@/shared/queries/search/types";
import { useCallback, useEffect, useMemo } from "react";
import type { ISortFilterOption } from "@/features/filters/sort-filter";

interface ISortOptions {
  filters: ICategoriesSearchFilters;
  onCategoriesFiltersChange: (filters: ICategoriesFilters) => void;
}

export function useCategorySortFilterHook({
  filters,
  onCategoriesFiltersChange,
}: ISortOptions) {
  const sortFilter = [
    { title: "За рейтингом", value: SORT_OPTIONS.RATING_HIGHEST },
    { title: "Найновіші", value: SORT_OPTIONS.NEWEST },
    { title: "Найдешевші", value: SORT_OPTIONS.PRICE_LOWEST },
    { title: "Найдорожчі", value: SORT_OPTIONS.PRICE_HIGHEST },
  ];

  const sortSelected = useMemo(
    () =>
      sortFilter.find(({ value }) => value === filters.sortOption) ||
      sortFilter[0],
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
