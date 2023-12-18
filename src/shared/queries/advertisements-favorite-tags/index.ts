import { useInfiniteQuery, type UseInfiniteQueryResult } from "react-query";
import type { AxiosError } from "axios";
import AdvertisementFavorite from "@/shared/api/advertisement-favorite";
import {
  type IGetAdvertisementFavoriteProps,
  type IAdvertisementFavorite,
} from "@/shared/api/advertisement-favorite/types";

export function useGetAdvertisementsFavorite({
  langCode,
  categoriesIds,
  size,
}: IGetAdvertisementFavoriteProps): UseInfiniteQueryResult<
  IAdvertisementFavorite,
  AxiosError
> {
  return useInfiniteQuery(
    ["advertisements-favorite", langCode, categoriesIds, size],
    ({ pageParam = 1 }: { pageParam?: number }) =>
      AdvertisementFavorite.getAdvertisementFavorite({
        langCode,
        categoriesIds,
        size,
        page: pageParam,
      }),
    { getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 2 },
  );
}
