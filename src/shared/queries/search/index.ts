import { useQuery, type UseQueryResult } from "react-query";
import Search from "@/shared/api/search";
import { type ICategoriesSearch } from "@/shared/api/search/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { type ICategoriesSearchFilters } from "./types";
import { useEffect } from "react";

export const SEARCH_CATEGORIES_KEY = "search-categories";

interface IConfig {
  enabled?: boolean;
}

interface IGetCategoriesSearchProps {
  locale?: string;
  filters: ICategoriesSearchFilters;
  config?: IConfig;
  disabledRefetch?: boolean;
}

export function useGetCategoriesSearch({
  locale = DEFAULT_LOCALE,
  filters,
  config,
  disabledRefetch,
}: IGetCategoriesSearchProps): UseQueryResult<ICategoriesSearch> {
  const query = useQuery(
    [SEARCH_CATEGORIES_KEY],
    () => Search.getSearch(locale, filters),
    { ...config, enabled: false },
  );

  useEffect(() => {
    if (!disabledRefetch) {
      void query?.refetch();
    }
  }, [filters, disabledRefetch]);

  return query;
}
