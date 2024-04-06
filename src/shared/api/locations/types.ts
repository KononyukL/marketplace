import { type ICategoriesBase } from "../categories/types";
import { type IGetAdvertisementFavoriteProps } from "@/shared/api/advertisement-favorite/types";

export interface ILocation {
  id: number;
  name: string;
  alias: string;
  country_id: number;
  country_name: string;
  koatuu_code: string;
}

export interface ICity extends ILocation {
  city_type_title: string;
  city_type_short_title: string;
  district_id: number;
  district_name: string;
  state_id: number;
  state_name: string;
}

export interface ICityByNameProps {
  name: string;
  size?: number;
}

export interface ICategoriesSearch extends IGetAdvertisementFavoriteProps {
  searchTerm: string;
  category: ICategoriesBase;
}
