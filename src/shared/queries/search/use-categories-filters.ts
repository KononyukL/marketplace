import { useCallback, useMemo } from "react";
import type { IState } from "@/entities/search-header/ui/search-location";
import useSaveInURL from "@/shared/hooks/use-save-in-url";
import { type WithRequired } from "@/shared/config";
import { DEFAULT_PAGE, DEFAULT_SIZE } from "@/shared/queries/constants";

interface ICategoriesDefaultFilters {
  size?: number;
  page?: number;
  categoryId?: number;
}

export interface ICategoriesSearch {
  searchTerm: string;
  location?: IState;
}

export interface ICategoriesFilters {
  minPrice?: number;
}

export interface ICategoriesSearchFilters
  extends ICategoriesSearch,
    ICategoriesFilters,
    WithRequired<ICategoriesDefaultFilters, "page" | "size"> {}

interface CategoriesFiltersResult {
  filters: ICategoriesSearchFilters;
  onCategoriesSearchChange: (filters: ICategoriesSearch) => void;
  onCategoriesFiltersChange: (filters: ICategoriesFilters) => void;
}

interface ICategoriesFiltersProps {
  defaultFilters?: ICategoriesDefaultFilters;
}

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
