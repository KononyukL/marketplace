import { type IImageFull } from "@/shared/api/advertisement/types";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { Icons } from "@/shared/config";
import { useImageSlider } from "./lib";
import { EMPTY_FIELD } from "@/pages/announcement/ui/announcement-main-info";

export const SliderComponent = ({ images }: { images: IImageFull[] }) => {
  const {
    primarySliderSettings,
    primarySlider,
    thumbnailSliderRef,
    THUMBNAIL_SLIDER_PROPS,
  } = useImageSlider();

  if (images.length === 0) {
    return <div className="h-[400px] text-black">{EMPTY_FIELD}</div>;
  }

  return (
    <>
      <div className="relative">
        <Slider {...primarySliderSettings}>
          {images.map((img) => (
            <Image
              key={img.id}
              src={img.url}
              alt=""
              width={885}
              height={400}
              className="max-h-[400px] rounded-lg bg-[#EDEEEE] object-contain "
            />
          ))}
        </Slider>
        <div className="img-count absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-lg px-4 py-2 text-title">
          <Icons.Camera />
          {images.length}
        </div>
      </div>

      <Slider
        className="thumbnails-slider mt-6"
        asNavFor={primarySlider}
        ref={(slider) => (thumbnailSliderRef.current = slider)}
        {...THUMBNAIL_SLIDER_PROPS}
      >
        {images.map((image, id) => (
          <div key={image.id}>
            <Image
              src={image.url_small}
              className="h-[104px] rounded-lg bg-[#edeeee] object-contain "
              alt={`slider-image-${id}`}
              width={152}
              height={104}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
