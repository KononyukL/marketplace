import { type IRatingList } from "@/shared/api/user-review/types";
import { Rating } from "react-simple-star-rating";

const RATING_MAPPING = [
  { key: "rating_5", label: "5" },
  { key: "rating_4", label: "4" },
  { key: "rating_3", label: "3" },
  { key: "rating_2", label: "2" },
  { key: "rating_1", label: "1" },
];

export const RatingList = ({ ratingList }: { ratingList: IRatingList }) => {
  return (
    <ul className="gap flex flex-col">
      {RATING_MAPPING.map(({ key, label }, index) => (
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
          <hr className="w-24 border-border-seconadry border-text-2" />
          <span className="text-title">{ratingList[key]}</span>
        </li>
      ))}
    </ul>
  );
};