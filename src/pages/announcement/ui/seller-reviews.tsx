import { type IUserReview } from "@/shared/api/user-review/types";
import { Button } from "@/shared/ui/button/ui";
import { RatingList } from "./rating-list";
import { RatingStar } from "@/shared/ui/rating-star";
import { useTranslation } from "next-i18next";

const MAX_STARS_COUNT = 5;

export const SellerReviews = ({ reviews }: { reviews: IUserReview }) => {
  const { t } = useTranslation("announcement");

  const reviewsTexts =
    reviews.reviews_count > 0 ? (
      <>
        <p>{t("seller-reviews.paragraph-one")}</p>
        <p>{t("seller-reviews.paragraph-two")}</p>
        <p>{t("seller-reviews.paragraph-three")}</p>
      </>
    ) : (
      <>
        <p>{t("seller-reviews.paragraph-one-zero-reviews")}</p>
        <p>{t("seller-reviews.paragraph-two-zero-reviews")}</p>
      </>
    );

  return (
    <div className="mt-20 rounded-lg bg-white p-12">
      <h2 className="mb-8 text-header-secondary font-medium leading-9 text-title">
        {t("seller-reviews.header")}
      </h2>
      <div className="flex justify-between gap-8">
        <div className="flex max-w-review-text-box flex-col justify-between text-text-secondary">
          <div>{reviewsTexts}</div>
          <Button variant="primary" size="md">
            {t("seller-reviews.write-review-btn")}
          </Button>
        </div>
        <div className="flex w-rating-box justify-evenly rounded-lg border border-text-2 px-6 py-rating-box align-middle">
          <div className="flex flex-col items-center gap-2">
            <p className="text-header-secondary leading-8 text-title">
              <span className="text-rating-number leading-rating">
                {reviews.rating}
              </span>
              /{MAX_STARS_COUNT}
            </p>
            <RatingStar initialValue={reviews.rating} />
            <p className="text-text-3">
              {t("seller-reviews.reviews-count")} {reviews.reviews_count}
            </p>
          </div>
          <RatingList ratingList={reviews.rating_list} />
        </div>
      </div>
      <div className="flex gap-6">
        {reviews.reviews.map((el) => (
          <div
            className="mt-16 h-rating-list w-rating-list rounded-lg border border-text-2 p-8"
            key={el.id}
          >
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium leading-6 text-title">
                  {el.author_first_name}
                </h4>
                <p className="text-text-3">{el.created}</p>
              </div>
              <RatingStar initialValue={el.value} />
            </div>
            <p className="mt-4 text-text-secondary">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
