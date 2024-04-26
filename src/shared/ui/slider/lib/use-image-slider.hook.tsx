import { Icons } from "@/shared/config";
import { useState, useRef, useEffect } from "react";
import { type Settings, type CustomArrowProps } from "react-slick";
import type Slider from "react-slick";

const SLIDES_TO_SHOW = 4;

const THUMBNAIL_SLIDER_PROPS = {
  initialSlide: 0,
  adaptiveHeight: false,
  arrows: false,
  focusOnSelect: true,
  slidesToShow: SLIDES_TO_SHOW,
  infinite: SLIDES_TO_SHOW > 5,
  variableWidth: true,
} satisfies Settings;

export const useImageSlider = () => {
  const [primarySlider, setPrimarySlider] = useState<Slider | undefined>();
  const [thumbnailSlider, setThumbnailSlider] = useState<Slider | undefined>();

  const primarySliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (primarySliderRef.current && thumbnailSliderRef.current) {
      setPrimarySlider(primarySliderRef.current);
      setThumbnailSlider(thumbnailSliderRef.current);
    }
  }, [primarySliderRef, thumbnailSliderRef]);

  const primarySliderSettings = {
    asNavFor: thumbnailSlider,
    ref: (slider: Slider | null) => (primarySliderRef.current = slider),
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    className: "main-img-slider",
  } as unknown as React.Component<Settings, never>; //satisfies Settings;

  return {
    primarySliderSettings,
    primarySlider,
    thumbnailSliderRef,
    THUMBNAIL_SLIDER_PROPS,
  };
};

const CustomNextArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block" }}
    >
      <Icons.ArrowRight />
    </div>
  );
};

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block" }}
    >
      <Icons.ArrowLeft />
    </div>
  );
};
