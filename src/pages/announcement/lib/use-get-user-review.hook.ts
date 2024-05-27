import { type UseQueryResult, useQuery } from "react-query";
import type { AxiosError } from "axios";
import ReviewService from "@/shared/api/user-review";
import {
  type IUserReview,
  type IGetIUserReviewProps,
} from "@/shared/api/user-review/types";

export function useGetUserReview({
  id,
  enabled,
}: IGetIUserReviewProps): UseQueryResult<IUserReview, AxiosError> {
  return useQuery(["reviews", id], () => ReviewService.getUserReview({ id }), {
    enabled,
  });
}
