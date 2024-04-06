import { useCallback, useMemo } from "react";
import useSaveInURL from "@/shared/hooks/use-save-in-url";
import { DEFAULT_PAGE, DEFAULT_SIZE } from "@/shared/queries/constants";
import {
  type ICategoriesFiltersProps,
  type CategoriesFiltersResult,
  type ICategoriesSearch,
  type ICategoriesFilters,
  type ICategoriesSearchFilters,
} from "./types";

export const GLOBAL_SEARCH_KEY = "globalSearch";
export const CATEGORIES_SEARCH_KEY = "categoriesSearch";

export const useCategoriesFilters = ({
  defaultFilters,
}: ICategoriesFiltersProps = {}): CategoriesFiltersResult => {
  const [
    searchFilters = {
      searchTerm: "",
    },
    setSearchFilters,
  ] = useSaveInURL<ICategoriesSearch>(GLOBAL_SEARCH_KEY);

  const [categoriesFilters, setCategoriesFilters] =
    useSaveInURL<ICategoriesFilters>(CATEGORIES_SEARCH_KEY);

  const onCategoriesSearchChange = useCallback(
    (filters: ICategoriesSearch) => {
      setSearchFilters(filters);
    },
    [setSearchFilters],
  );

  const onCategoriesFiltersChange = useCallback(
    (filters: ICategoriesFilters) => {
      setCategoriesFilters(filters);
    },
    [setCategoriesFilters],
  );

  const filters = useMemo<ICategoriesSearchFilters>(
    () => ({
      ...searchFilters,
      ...categoriesFilters,
      size: defaultFilters?.size || DEFAULT_SIZE,
      page: defaultFilters?.page || DEFAULT_PAGE,
      categoryId: defaultFilters?.categoryId,
    }),
    [defaultFilters, searchFilters, categoriesFilters],
  );

  return {
    filters,
    onCategoriesSearchChange,
    onCategoriesFiltersChange,
  };
};
