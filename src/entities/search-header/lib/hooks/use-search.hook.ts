import {
  SEARCH_CATEGORIES_KEY,
  useCategoriesSearch,
} from "@/shared/queries/search";
import { type ICategoriesSearchPageable } from "@/shared/queries/search/types";
import {
  CATEGORIES_SEARCH_KEY,
  GLOBAL_SEARCH_KEY,
} from "@/shared/queries/search/use-categories-filters";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useQueryClient } from "react-query";

export const useSearch = () => {
  const router = useRouter();
  const { mutate: searchCategories, isLoading } = useCategoriesSearch();
  const queryClient = useQueryClient();

  const searchFunc = useCallback(
    (filters: ICategoriesSearchPageable) => {
      console.log(filters, " filters in useSearch");
      searchCategories(
        { filters },
        {
          onSuccess: (data) => {
            // const urlSearchParams = new URLSearchParams(
            //   router.query as Record<string, string>,
            // );

            // const globalSearchValue = JSON.stringify({
            //   searchTerm: filters.searchTerm,
            //   location: filters.location,
            // });

            // if (!filters.searchTerm && !filters.location?.name) {
            //   urlSearchParams.delete(CATEGORIES_SEARCH_KEY);
            //   urlSearchParams.delete(GLOBAL_SEARCH_KEY);
            // } else {
            //   urlSearchParams.set(GLOBAL_SEARCH_KEY, globalSearchValue);
            // }

            // const search = urlSearchParams.toString();
            // const query = search ? Object.fromEntries(urlSearchParams) : {};

            // const categoryId = data?.category?.id ?? 0;
            // const pathname = `/categories/${categoryId}`;
            // console.log(`Navigating to: ${pathname}?${search}`);
            queryClient.invalidateQueries([SEARCH_CATEGORIES_KEY, filters]);
            // todo: page is not reloading , categorry is not updating, we need to centralize this
            // router
            //   .push({
            //     pathname,
            //     query,
            //   })
            //   .catch((error) => {
            //     console.error("Router push error:", error);
            //   });
          },
          onError: (error) => {
            console.error("Search failed:", error);
          },
        },
      );
    },
    [searchCategories, queryClient],
  );

  const performSearch = useCallback(
    (filters: ICategoriesSearchPageable) => {
      searchFunc(filters);
    },
    [searchFunc],
  );
  return {
    performSearch,
    isLoading,
  };
};
