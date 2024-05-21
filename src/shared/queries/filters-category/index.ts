import { useQuery, type UseQueryResult } from "react-query";
import {
  type IFilterDefault,
  type IFilters,
} from "@/shared/api/filters-category/types";
import { type AxiosError } from "axios";
import FiltersCategoryActionsService from "@/shared/api/filters-category";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";

export function useGetFiltersCategory({
  langCode = DEFAULT_LOCALE,
  categoryId,
}: IFilterDefault): UseQueryResult<IFilters, AxiosError> {
  return useQuery(
    ["filters-category", langCode, categoryId],
    () =>
      FiltersCategoryActionsService.getFiltersCategory({
        langCode,
        categoryId,
      }),
    { enabled: !!categoryId },
  );
}
