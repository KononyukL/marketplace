import Search from "@/shared/api/search";
import {
  type ICategoriesSearch,
  type ISearchData,
} from "@/shared/api/search/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import {
  useMutation,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "react-query";
import { type ICategoriesSearchFilters } from "./types";

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
  const query = useQuery(
    [SEARCH_CATEGORIES_KEY, filters],
    () => Search.getSearch(locale, filters),
    { ...config, enabled: Boolean(filters), keepPreviousData: true },
  );

  return query;
}

export function useCategoriesSearch(): UseMutationResult<
  ICategoriesSearch,
  unknown,
  ISearchData
> {
  return useMutation(Search.search.bind(Search), {
    onError: (error: Error) => {
      // TODO: replace console.log with a user-friendly notification using notistack
      console.log(error.message);
    },
  });
}
