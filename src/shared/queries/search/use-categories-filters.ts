import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_NUMBER,
} from "@/shared/queries/constants";
import { useCallback, useMemo, useState } from "react";
import {
  type ICategoriesFilters,
  type ICategoriesFiltersProps,
  type ICategoriesSearchFilters,
} from "./types";
import { deepEqual } from "@/shared/lib/deep-equal/deep-equal";

export const GLOBAL_SEARCH_KEY = "globalSearch";
export const CATEGORIES_SEARCH_KEY = "categoriesSearch";

export const useCategoriesFilters = ({
  defaultFilters,
}: ICategoriesFiltersProps = {}) => {
  const initialFilters = useMemo(
    () => ({
      searchTerm: "",
      location: { name: "", id: 0 },
      size: DEFAULT_PAGE_SIZE,
      page: DEFAULT_PAGE_NUMBER,
      categoryId: undefined,
    }),
    [],
  );

  const [categoriesFilters, setCategoriesFilters] =
    useState<ICategoriesFilters>({
      searchTerm: defaultFilters?.searchTerm || "",
      location: defaultFilters?.location || { name: "", id: 0 },
      size: defaultFilters?.size || DEFAULT_PAGE_SIZE,
      page: defaultFilters?.page || DEFAULT_PAGE_NUMBER,
      categoryId: defaultFilters?.categoryId,
    });

  const onCategoriesFiltersChange = useCallback(
    (newFilters: Partial<ICategoriesFilters>) => {
      setCategoriesFilters((prev) => {
        const updatedFilters = { ...prev, ...newFilters };

        if (!deepEqual(prev, updatedFilters)) {
          return updatedFilters;
        }

        return prev;
      });
    },
    [setCategoriesFilters],
  );

  const resetCategoriesFilters = useCallback(() => {
    setCategoriesFilters(initialFilters);
  }, [initialFilters]);

  const filters = useMemo<ICategoriesSearchFilters>(() => {
    return {
      size: categoriesFilters.size,
      page: categoriesFilters.page,
      categoryId: categoriesFilters.categoryId,
      searchTerm: categoriesFilters.searchTerm || "",
      location: categoriesFilters.location,
    };
  }, [categoriesFilters]);

  return {
    filters,
    onCategoriesFiltersChange,
    resetCategoriesFilters,
  };
};
