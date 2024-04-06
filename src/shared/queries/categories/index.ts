import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";

import CategoriesService from "@/shared/api/categories";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { type ICategoriesBase } from "@/shared/api/categories/types";

export function useGetCategories(
  locale = DEFAULT_LOCALE,
): UseQueryResult<ICategoriesBase[], AxiosError> {
  return useQuery(["categories", locale], () =>
    CategoriesService.getCategories(locale),
  );
}
