import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

import { type ICategoriesSearch } from "@/shared/api/search/types";
import { useCategoriesSearch } from "@/shared/queries/search";
import {
  CATEGORIES_SEARCH_KEY,
  GLOBAL_SEARCH_KEY,
  useCategoriesFilters,
} from "@/shared/queries/search/use-categories-filters";

export const useSearchRedirection = () => {
  const router = useRouter();

  const { filters } = useCategoriesFilters();
  const { mutate: searchCategories, isLoading } = useCategoriesSearch();

  const onSuccessHandler = useCallback(
    (data: ICategoriesSearch) => {
      const urlSearchParams = new URLSearchParams(
        router.query as Record<string, string>,
      );

      const globalSearchValue = JSON.stringify({
        searchTerm: filters.searchTerm,
        location: filters.location,
      });

      if (!globalSearchValue) {
        urlSearchParams.delete(CATEGORIES_SEARCH_KEY);
        urlSearchParams.delete(GLOBAL_SEARCH_KEY);
      } else {
        urlSearchParams.set(GLOBAL_SEARCH_KEY, globalSearchValue);
      }

      const search = urlSearchParams.toString();
      const query = search ? `?${search}` : "";

      const categoryId = data?.category?.id ?? 0;
      const pathname = `/categories/${categoryId}`;

      router.push(`${pathname}${query}`);
    },
    [router, filters.location, filters.searchTerm],
  );

  const redirectToCategoryBySearch = useCallback(() => {
    if (filters.searchTerm) {
      searchCategories(
        {
          filters: {
            searchTerm: filters.searchTerm,
            location: filters.location,
            size: filters.size,
            page: filters.page,
          },
        },
        {
          onSuccess: onSuccessHandler,
        },
      );
    }
  }, [
    filters.searchTerm,
    filters.page,
    filters.size,
    filters.location,
    searchCategories,
    onSuccessHandler,
  ]);

  useEffect(() => {
    redirectToCategoryBySearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.searchTerm]);

  return {
    isLoading,
  };
};
