import {
  type IImage,
  type IAdvertisement,
  type IAuthor,
  type ILocation,
} from "@/shared/api/advertisement-favorite/types";
import { type ICategoriesBase } from "../categories/types";
import { type IActivatableFeature, type ILocalizableEntity } from "../types";

export interface BaseCategory {
  title: string;
  description: string;
}

interface IFeatureOption extends ILocalizableEntity, IActivatableFeature {
  description: string;
}

export interface IDelivery extends IFeatureOption {}
export interface IPayment extends IFeatureOption {}

interface IBreed extends ILocalizableEntity, BaseCategory {
  category: BaseCategory;
}

export interface IAuthorDetails extends Omit<IAuthor, "shortName"> {
  email: string;
  first_name: string;
  last_name: string;
  last_activity: string;
  response_speed: number;
  complete_orders_count: number;
}

interface ILocationDetails extends Omit<ILocation, "city_type_short_title"> {
  latitude: number;
  longitude: number;
  state_name: string;
}

interface IReviews extends ILocalizableEntity, Omit<BaseCategory, "title"> {
  type: string;
  value: number;
  advertisement_id: number;
  author_first_name: string;
  author_last_name: string;
  author_id: number;
}

export interface IImageFull extends IImage {
  advertisement_id: number;
  main_image: boolean;
  url_small: string;
}

interface IVaccines extends IImageFull {}
interface IDocuments extends IImageFull {}

export interface IAdvertisementDetails
  extends Omit<IAdvertisement, "author" | "location"> {
  author: IAuthorDetails;
  location: ILocationDetails;
  category: ICategoriesBase;
  deliveries: IDelivery[];
  payments: IPayment[];
  quantity: number;
  breed: IBreed;
  reviews: IReviews[];
  images: IImageFull[];
  documents: IDocuments[];
  vaccines: IVaccines[];
  additional_information: string;
}

export interface IGetAdvertisementProps {
  langCode: string;
  id: number;
}
