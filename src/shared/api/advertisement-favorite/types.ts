import { type BaseCategory } from "../advertisement/types";
import { type IEntity, type ILocalizableEntity } from "../types";

interface ISort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

interface IPageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: ISort;
  paged: boolean;
  unpaged: boolean;
}

interface IPageResponseBase {
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: ISort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IAuthor extends IEntity {
  shortName: string;
  rating: number;
  reviews_count: number;
  user_avatar_url: string;
  user_type: string;
}

export interface ILocation {
  city_id: number;
  city_name: string;
  city_type_short_title: string;
}

export interface IAttribute extends ILocalizableEntity {
  title: string;
  group_id: number;
  group_title: string;
  attribute_id: number;
  sort_value: number;
}

export interface IImage {
  id: number;
  url: string;
}

export interface IAdvertisement extends IEntity, BaseCategory {
  author: IAuthor;
  alias: string;
  price: number;
  location: ILocation;
  type: string;
  rating: number;
  attributes: IAttribute[];
  favorite_attributes: IAttribute[];
  images: IImage[];
}

export interface IAdvertisementFavorite extends IPageResponseBase {
  pageable: IPageable;
  content: IAdvertisement[];
}

export interface IGetAdvertisementFavoriteProps {
  langCode: string;
  categoriesIds?: number;
  page?: number;
  size?: number;
}
