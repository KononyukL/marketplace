import { Rating } from "react-simple-star-rating";

interface IRatingStar {
  initialValue?: number;
  size?: number;
  readOnly?: boolean;
  iconsCount?: number;
}

export const RatingStar = ({
  initialValue,
  size = 20,
  readOnly = true,
  iconsCount = 5,
}: IRatingStar) => {
  return (
    <Rating
      SVGstyle={{ display: "inline" }}
      iconsCount={iconsCount}
      initialValue={initialValue}
      size={size}
      readonly={readOnly}
      fillColor={"#2A907F"}
      SVGstrokeColor={"#2A907F"}
      SVGstorkeWidth={1.5}
      emptyColor={"#FFFFFF"}
      allowFraction={true}
    />
  );
};
