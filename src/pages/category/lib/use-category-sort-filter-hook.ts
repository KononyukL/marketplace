import { type ISortFilterOption } from "@/features/filters/sort-filter";
import { SORT_TITLES } from "@/shared/config";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from "@/shared/queries/constants";
import {
  type ICategoriesFilters,
  type ICategoriesSearchFilters,
  type SORT_OPTIONS,
} from "@/shared/queries/search/types";
import { useCallback, useEffect, useMemo } from "react";

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
    [filters.sortOption, defaultSortValue, sortFilter],
  );

  const onSortChange = useCallback(
    (value: ISortFilterOption<SORT_OPTIONS>) => {
      onCategoriesFiltersChange({
        sortOption: value.value,
        page: DEFAULT_PAGE_NUMBER,
        size: DEFAULT_PAGE_SIZE,
      });
    },
    [onCategoriesFiltersChange],
  );

  const onMainFilterChange = useCallback(
    (mainFilters: ICategoriesFilters) => {
      onCategoriesFiltersChange(mainFilters);
    },
    [onCategoriesFiltersChange],
  );

  useEffect(() => {
    if (!filters.sortOption) {
      onSortChange(sortFilter[0]);
    }
  }, [filters, onSortChange, sortFilter]);

  return { sortSelected, sortFilter, onSortChange, onMainFilterChange };
}
