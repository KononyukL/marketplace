import { IImageFull } from "@/shared/api/advertisement/types";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { Icons } from "@/shared/config";

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SliderComponent = ({ images }: { images: IImageFull[] }) => {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();
  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  useEffect(() => {
    if (slider1.current && slider2.current) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, []);

  function CustomNextArrow(props: CustomArrowProps) {
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
  }

  function CustomPrevArrow(props: CustomArrowProps) {
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
  }

  const mainImgSliderSetting = {
    asNavFor: nav2,
    ref: slider1,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    className: "main-img-slider",
  };

  return (
    <>
      <div className="relative">
        <Slider {...mainImgSliderSetting}>
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
        adaptiveHeight={false}
        arrows={false}
        asNavFor={nav1}
        focusOnSelect={true}
        infinite={false}
        ref={slider2}
        slidesToShow={4}
        variableWidth={true}
      >
        {images.map((image) => (
          <div key={image.id} className="">
            <Image
              src={image.url_small}
              className="h-[120px] rounded-lg object-cover"
              alt=""
              width={120}
              height={120}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
