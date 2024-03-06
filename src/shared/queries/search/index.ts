import { useQuery, type UseQueryResult } from "react-query";
import { useCallback, useState } from "react";
import useDebounce from "@/shared/hooks/use-debounce";
import Search from "@/shared/api/search";
import { type ICategoriesSearch } from "@/shared/api/search/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";

export function useGetCategoriesSearch(
  locale = DEFAULT_LOCALE,

  { searchTerm, ...restFilter } = {
    size: 12,
    page: 1,
    searchTerm: "",
    cityIds: 0,
  },
): UseQueryResult<ICategoriesSearch> & {
  searchCategories: (name: string) => void;
  queryString: string;
} {
  const [name, setName] = useState("");
  const debouncedName = useDebounce<string>(name || searchTerm, 500);

  const searchCategories = useCallback((name: string) => {
    setName(name);
  }, []);

  const data = useQuery(
    ["search-categories", debouncedName],
    () =>
      Search.getSearch(locale, {
        searchTerm: debouncedName,
        ...restFilter,
      }),
    { enabled: !!debouncedName },
  );

  return { ...data, searchCategories, queryString: name };
}
