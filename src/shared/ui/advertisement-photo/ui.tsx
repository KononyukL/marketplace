import Image from "next/image";
import { type IImage } from "@/shared/api/advertisement-favorite/types";

interface IAdvertisementPhotos {
  img: IImage[];
}

export const AdvertisementPhotos = ({ img }: IAdvertisementPhotos) => {
  const [firstImg, secondImg, thirdImg] = img;

  if (!img.length) {
    return (
      <div className="max-w-advertisement-photo flex flex-1 items-center justify-center">
        Not photo
      </div>
    );
  }

  switch (img.length) {
    case 1:
      return (
        <div className="max-w-advertisement-photo max-h-photo-2 flex items-center justify-center overflow-hidden rounded-lg">
          <Image
            className="rounded-lg "
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
        <div>
          <Image
            className="rounded-lg"
            src={firstImg.url}
            alt="foto"
            width={390}
            height={390}
          />
          <Image
            className="rounded-lg"
            src={secondImg.url}
            alt="foto"
            width={390}
            height={390}
          />
        </div>
      );
    default:
      return (
        <div className="justify-cente max-w-advertisement-photo flex flex-col items-center gap-2">
          <div className="max-h-photo relative overflow-hidden rounded-lg">
            <Image src={firstImg.url} alt="foto" width={390} height={168} />
          </div>
          <div className="flex gap-4">
            <Image
              className="max-h-photo flex-1 rounded-lg"
              src={secondImg.url}
              alt="foto"
              width={390}
              height={168}
            />
            <Image
              className="max-h-photo flex-1 rounded-lg"
              src={thirdImg.url}
              alt="foto"
              width={390}
              height={168}
            />
          </div>
        </div>
      );
  }
};
