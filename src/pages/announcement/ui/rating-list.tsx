import { type IRatingList } from "@/shared/api/user-review/types";
import { RatingStar } from "@/shared/ui/rating-star/ui";
import { cn } from "@/shared/lib/cn";

const RATING_MAPPING = [
  { key: "rating_5", label: "5" },
  { key: "rating_4", label: "4" },
  { key: "rating_3", label: "3" },
  { key: "rating_2", label: "2" },
  { key: "rating_1", label: "1" },
];

export const RatingList = ({ ratingList }: { ratingList: IRatingList }) => {
  return (
    <ul className="flex flex-col">
      {RATING_MAPPING.map(({ key, label }, index) => (
        <li key={index} className="flex items-center gap-2 align-middle">
          <span className="text-gray-8">{label}</span>
          <RatingStar iconsCount={1} size={16} initialValue={1} />
          <hr
            className={
              "w-24 border-border-secondary " +
              cn("border-gray-2", {
                "border-teal-0": ratingList[key] > 0,
              })
            }
          />
          <span className="text-primary">{ratingList[key]}</span>
        </li>
      ))}
    </ul>
  );
};
