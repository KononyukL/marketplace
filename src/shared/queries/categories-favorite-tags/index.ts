import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";
import { type ICategoriesFavoriteTags } from "@/shared/api/categories-favorite-tags/types";
import CategoriesFavoriteTagsService from "@/shared/api/categories-favorite-tags";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";

export function useGetCategoriesFavoriteTags(
  locale = DEFAULT_LOCALE,
): UseQueryResult<ICategoriesFavoriteTags[], AxiosError> {
  return useQuery(["categories-favorite-tags", locale], () =>
    CategoriesFavoriteTagsService.getCategoriesFavoriteTags(locale),
  );
}
