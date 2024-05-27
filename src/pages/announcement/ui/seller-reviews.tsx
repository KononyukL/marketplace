import { type IUserReview } from "@/shared/api/user-review/types";
import { Button } from "@/shared/ui/button/ui";
import { Rating } from "react-simple-star-rating";

const ratingMapping = [
  { key: "rating_5", label: "5" },
  { key: "rating_4", label: "4" },
  { key: "rating_3", label: "3" },
  { key: "rating_2", label: "2" },
  { key: "rating_1", label: "1" },
];

export const SellerReviews = ({ reviews }: { reviews: IUserReview }) => {
  return (
    <div className="mt-20 rounded-lg bg-white p-12">
      <h2 className="text-header-secondary mb-8 font-medium leading-9 text-title">
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
        <div className="py-rating-box flex w-rating-box justify-evenly rounded-lg border border-text-2 px-6 align-middle">
          <div className="flex flex-col items-center gap-2">
            <p className="text-header-secondary leading-8 text-title">
              <span className="leading-rating text-rating-number">
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
          <ul className="gap flex flex-col">
            {ratingMapping.map(({ key, label }, index) => (
              <li key={index} className="flex items-center gap-2 align-middle">
                <span className="text-text-3">{label}</span>
                <Rating
                  iconsCount={1}
                  size={16}
                  readonly={true}
                  emptyColor={"#2A907F"}
                  SVGstrokeColor={"#2A907F"}
                  SVGstorkeWidth={1.5}
                />
                <hr className="border-border-seconadry w-24 border-text-2" />
                <span className="text-title">{reviews.rating_list[key]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-6">
        {reviews.reviews.map((el) => (
          <div
            className="h-rating-list w-rating-list mt-16 rounded-lg border border-text-2 p-8"
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
