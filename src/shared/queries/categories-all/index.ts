import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";
import { type ICategories } from "@/shared/api/categories/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import CategoriesAllService from "@/shared/api/categories-all";

export function useGetCategoriesAll(
  locale = DEFAULT_LOCALE,
): UseQueryResult<ICategories[], AxiosError> {
  return useQuery(["categoriesAll", locale], () =>
    CategoriesAllService.getCategoriesAll(locale),
  );
}
