import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";
import { type ICategoriesFavoriteTags } from "@/shared/api/categories-favorite-tags/types";
import CategoriesFavoriteTagsService from "@/shared/api/categories-favorite-tags";

export function useGetCategoriesFavoriteTags(): UseQueryResult<
  ICategoriesFavoriteTags[],
  AxiosError
> {
  return useQuery(["categories-favorite-tags"], () =>
    CategoriesFavoriteTagsService.getCategoriesFavoriteTags(),
  );
}
