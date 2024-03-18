import { useQuery, type UseQueryResult } from "react-query";
import Search from "@/shared/api/search";
import { type ICategoriesSearch } from "@/shared/api/search/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { type ICategoriesSearchFilters } from "@/shared/queries/search/use-categories-filters";

export const SEARCH_CATEGORIES_KEY = "search-categories";

interface IConfig {
  enabled?: boolean;
}

interface IGetCategoriesSearchProps {
  locale?: string;
  filters: ICategoriesSearchFilters;
  config?: IConfig;
}

export function useGetCategoriesSearch({
  locale = DEFAULT_LOCALE,
  filters,
  config,
}: IGetCategoriesSearchProps): UseQueryResult<ICategoriesSearch> {
  return useQuery(
    [SEARCH_CATEGORIES_KEY, { ...filters }],
    () => Search.getSearch(locale, filters),
    config,
  );
}
