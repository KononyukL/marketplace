import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";
import { type ICategories } from "@/shared/api/categories/types";
import CategoriesService from "@/shared/api/categories";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";

export function useGetCategories(
  locale = DEFAULT_LOCALE,
): UseQueryResult<ICategories[], AxiosError> {
  return useQuery(["categories", locale], () =>
    CategoriesService.getCategories(locale),
  );
}
