import {
  type IAdvertisement,
  type IAuthor,
} from "../advertisement-favorite/types";
import { type IAdvertisementDetails } from "../advertisement/types";

interface IRatingList {
  [key: string]: number;
}

export interface IUserReview
  extends Pick<IAdvertisement, "rating">,
    Pick<IAuthor, "reviews_count">,
    Pick<IAdvertisementDetails, "reviews"> {
  rating_list: IRatingList;
}

export interface IGetIUserReviewProps {
  id: number;
  enabled?: boolean;
}
