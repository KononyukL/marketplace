import { useQuery, type UseQueryResult } from "react-query";
import type { AxiosError } from "axios";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { type IBlog } from "@/shared/api/blog/types";
import BlogService from "@/shared/api/blog";

export function useGetBlog(
  locale = DEFAULT_LOCALE,
): UseQueryResult<IBlog[], AxiosError> {
  return useQuery(["blog", locale], () => BlogService.getBlog(locale));
}
