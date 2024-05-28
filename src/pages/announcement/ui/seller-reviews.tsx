import { type IUserReview } from "@/shared/api/user-review/types";
import { Button } from "@/shared/ui/button/ui";
import { Rating } from "react-simple-star-rating";
import { RatingList } from "./rating-list";

export const SellerReviews = ({ reviews }: { reviews: IUserReview }) => {
  return (
    <div className="mt-20 rounded-lg bg-white p-12">
      <h2 className="mb-8 text-header-secondary font-medium leading-9 text-title">
        Відгуки про продавця
      </h2>
      <div className="flex gap-8">
        <div className="max-w-review-text-box text-text-secondary">
          <p>Зворотній звязок важливий для нас!</p>
          <p>
            Залишити відгук можна ось тут, напишіть ваші враження від
            спілкування з продавцем. Ваші відгуки допоможуть іншим покупцям
            здійснити вибір!
          </p>
          <p>Всі відгуки проходять перевірку на дійсність.</p>
          <Button variant="primary" size="md" className="mt-10">
            Залишити відгук
          </Button>
        </div>
        <div className="flex w-rating-box justify-evenly rounded-lg border border-text-2 px-6 py-rating-box align-middle">
          <div className="flex flex-col items-center gap-2">
            <p className="text-header-secondary leading-8 text-title">
              <span className="text-rating-number leading-rating">
                {reviews.rating}
              </span>
              /5
            </p>
            <Rating
              SVGstyle={{ display: "inline" }}
              iconsCount={5}
              initialValue={reviews.rating}
              size={20}
              readonly={true}
              fillColor={"#2A907F"}
              SVGstrokeColor={"#2A907F"}
              SVGstorkeWidth={1.5}
              emptyColor={"#FFFFFF"}
              allowFraction={true}
            />
            <p className="text-text-3">
              Відгуків за весь час: {reviews.reviews_count}
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
              <Rating
                SVGstyle={{ display: "inline" }}
                iconsCount={5}
                initialValue={el.value}
                size={20}
                readonly={true}
                fillColor={"#2A907F"}
                SVGstrokeColor={"#2A907F"}
                SVGstorkeWidth={1.5}
                emptyColor={"#FFFFFF"}
                allowFraction={true}
              />
            </div>
            <p className="mt-4 text-text-secondary">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
