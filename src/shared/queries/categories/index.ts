import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";
import { type ICategories } from "@/shared/api/categories/types";
import CategoriesService from "@/shared/api/categories";

export function useGetCategories(): UseQueryResult<ICategories[], AxiosError> {
  return useQuery(["categories"], () => CategoriesService.getCategories());
}
