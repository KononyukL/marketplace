import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type IUserReview, type IGetIUserReviewProps } from "./types";

class UserReviewActions {
  async getUserReview({ id }: IGetIUserReviewProps): Promise<IUserReview> {
    const result = await axiosInstance.get<IUserReview>(
      `${paths.review.get_by_user_id}${id}/reviews`,
    );
    return result.data;
  }
}

const ReviewService = new UserReviewActions();
export default ReviewService;
