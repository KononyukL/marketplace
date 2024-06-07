import Image from "next/image";
import { type IImage } from "@/shared/api/advertisement-favorite/types";
import { Icons } from "@/shared/config";

interface IAdvertisementPhotos {
  img: IImage[];
}

export const AdvertisementPhotos = ({ img }: IAdvertisementPhotos) => {
  const [firstImg] = img;

  if (!img.length) {
    return (
      <div className="flex max-w-advertisement-photo flex-1 items-center justify-center">
        <Image
          className="rounded"
          src="/images/image-not-photo.png"
          alt="foto"
          width={390}
          height={360}
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-image-advertisement max-h-photo-2 max-w-advertisement-photo items-center justify-center overflow-hidden rounded bg-disable">
      <Image
        className="rounded"
        objectFit="contain"
        src={firstImg.url}
        alt="foto"
        width={390}
        height={360}
      />
      <div className="img-count absolute bottom-1 right-1 inline-flex w-[60px] items-center justify-center gap-2 rounded bg-white p-2 text-title">
        <Icons.CameraSmall />
        {img.length}
      </div>
    </div>
  );
};
