import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";

import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import CategoriesAllService from "@/shared/api/categories-all";
import { type ICategoriesBase } from "@/shared/api/categories/types";

export function useGetCategoriesAll(
  locale = DEFAULT_LOCALE,
): UseQueryResult<ICategoriesBase[], AxiosError> {
  return useQuery(["categoriesAll", locale], () =>
    CategoriesAllService.getCategoriesAll(locale),
  );
}
