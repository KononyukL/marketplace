import { type IImageFull } from "@/shared/api/advertisement/types";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { Icons } from "@/shared/config";
import { useImageSlider } from "../lib";

export const SliderComponent = ({ images }: { images: IImageFull[] }) => {
  const {
    primarySliderSettings,
    primarySlider,
    thumbnailSliderRef,
    THUMBNAIL_SLIDER_PROPS,
  } = useImageSlider();

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
              className="max-h-[400px] rounded-lg bg-gray-300 object-contain"
            />
          ))}
        </Slider>
        <div className="img-count absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-lg px-4 py-2 text-[#FFFEFE]">
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
              className="h-[120px] rounded-lg object-cover"
              alt={`slider-image-${id}`}
              width={120}
              height={120}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
