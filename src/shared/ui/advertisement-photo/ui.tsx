import Image from "next/image";
import { type IImage } from "@/shared/api/advertisement-favorite/types";

interface IAdvertisementPhotos {
  img: IImage[];
}

export const AdvertisementPhotos = ({ img }: IAdvertisementPhotos) => {
  const [firstImg, secondImg, thirdImg] = img;

  if (!img.length) {
    return (
      <div className="flex max-w-advertisement-photo flex-1 items-center justify-center">
        <Image
          className="rounded-lg"
          src="/images/image-not-photo.png"
          alt="foto"
          width={390}
          height={360}
        />
      </div>
    );
  }

  switch (img.length) {
    case 1:
      return (
        <div className="flex h-image-advertisement max-h-photo-2 max-w-advertisement-photo items-center justify-center overflow-hidden rounded-lg bg-disable">
          <Image
            className=" rounded-lg"
            objectFit="contain"
            src={firstImg.url}
            alt="foto"
            width={390}
            height={360}
          />
        </div>
      );
    case 2:
      return (
        <div className="flex  max-w-advertisement-photo flex-col items-center justify-center gap-2 overflow-hidden rounded-lg">
          <Image
            className="h-image max-w-advertisement-photo rounded-lg object-cover"
            src={firstImg.url}
            alt="foto"
            width={390}
            height={400}
          />
          <Image
            className="h-image max-w-advertisement-photo rounded-lg object-cover"
            src={secondImg.url}
            alt="foto"
            width={390}
            height={390}
          />
        </div>
      );
    default:
      return (
        <div className="flex h-image-advertisement max-w-advertisement-photo flex-col items-center justify-center gap-2 ">
          <div className="relative max-h-photo overflow-hidden rounded-lg">
            <Image
              className="h-image object-cover "
              src={firstImg.url}
              alt="foto"
              width={390}
              height={158}
            />
          </div>
          <div className="flex gap-4 ">
            <Image
              className="max-h-image-2 flex-initial rounded-lg object-cover"
              src={secondImg.url}
              objectFit="contain"
              alt="foto"
              width={390}
              height={158}
            />
            <Image
              className="max-h-image-2 flex-initial rounded-lg object-cover"
              src={thirdImg.url}
              objectFit="contain"
              alt="foto"
              width={390}
              height={158}
            />
          </div>
        </div>
      );
  }
};
