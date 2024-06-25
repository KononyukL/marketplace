import { useCallback, useMemo } from "react";
import { DEFAULT_PAGE, DEFAULT_SIZE } from "@/shared/queries/constants";
import {
  type ICategoriesFiltersProps,
  type CategoriesFiltersResult,
  type ICategoriesSearch,
  type ICategoriesFilters,
  type ICategoriesSearchFilters,
} from "./types";
import { useSaveInURL } from "@/shared/hooks";

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
    (filters: ICategoriesFilters | null) => {
      setCategoriesFilters(filters);
    },
    [setCategoriesFilters],
  );

  const filters = useMemo<ICategoriesSearchFilters>(() => {
    return {
      size: defaultFilters?.size || DEFAULT_SIZE,
      page: defaultFilters?.page || DEFAULT_PAGE,
      categoryId: defaultFilters?.categoryId,
      ...categoriesFilters,
      searchTerm: searchFilters?.searchTerm ?? "",
      location: searchFilters?.location,
    };
  }, [defaultFilters, searchFilters, categoriesFilters]);

  return {
    filters,
    onCategoriesSearchChange,
    onCategoriesFiltersChange,
  };
};
