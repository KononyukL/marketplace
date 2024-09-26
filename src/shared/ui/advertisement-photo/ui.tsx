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
      <div className="w-advertisement-photo flex items-center justify-center">
        <Image
          className="rounded"
          src="/images/image-not-photo.png"
          alt="foto"
          width={390}
          height={300}
        />
      </div>
    );
  }

  return (
    <div className="w-advertisement-photo relative flex h-image-advertisement items-center justify-center overflow-hidden rounded bg-disable">
      <Image
        className="h- h-full rounded object-cover object-top"
        src={firstImg.url}
        alt="foto"
        width={390}
        height={300}
      />

      <div className="img-count absolute bottom-1 right-1 inline-flex w-[60px] items-center justify-center gap-2 rounded bg-white p-2 text-title">
        <Icons.CameraSmall />
        {img.length}
      </div>
    </div>
  );
};
