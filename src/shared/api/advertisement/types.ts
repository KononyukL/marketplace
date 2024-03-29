import {
  type IImage,
  type IAdvertisement,
  type IAuthor,
} from "@/shared/api/advertisement-favorite/types";
import { type ICategoriesBase } from "@/shared/api/types";

interface IAuthorDetails extends Omit<IAuthor, "shortName"> {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  last_activity: string;
}

interface IDelivery {
  id: number;
  enable: boolean;
  name: string;
  description: string;
  lang_code: string;
}

interface IPayment {
  id: number;
  enable: boolean;
  name: string;
  description: string;
  lang_code: string;
}

// interface CategoryShort
//   extends Pick<ICategoriesBase, "id" | "title" | "description" | "lang_code"> {}

type CategoryShort = Pick<
  ICategoriesBase,
  "id" | "title" | "description" | "lang_code"
>;

interface IBreed {
  id: number;
  title: string;
  description: string;
  category: CategoryShort;
  created: string;
  updated: string;
  lang_code: string;
}

interface IReviews {
  id: number;
  created: string;
  type: string;
  value: number;
  description: string;
  advertisement_id: number;
  author_first_name: string;
  author_last_name: string;
  author_id: number;
}

interface IImageFull extends IImage {
  advertisement_id: number;
  main_image: boolean;
  url_small: string;
}

export interface IAdvertisementDetails extends Omit<IAdvertisement, "author"> {
  author: IAuthorDetails;
  category: ICategoriesBase;
  deliveries: IDelivery[];
  payments: IPayment[];
  quantity: number;
  breed: IBreed;
  reviews: IReviews[];
  images: IImageFull[];
  additional_information: string;
}

export interface IGetAdvertisementProps {
  langCode: string;
  id: number;
}
