import { type ICity } from "@/shared/api/locations/types";

interface FiltersCategoryResponse {
  title: string;
}

export interface IBreeds extends FiltersCategoryResponse {
  id: number;
  advertisements_count: number;
}
export interface IAttributesProps extends FiltersCategoryResponse {
  attributes: IAttributes[];
}

export interface IAttributes extends FiltersCategoryResponse {
  attribute_id: number;
}

interface IPriceRange {
  min_price: number;
  max_price: number;
}

export interface IFilters {
  breeds: IBreeds[];
  attributes: IAttributesProps[];
  cities: ICity[];
  lang_code: string;
  category_id: number;
  price_range: IPriceRange;
  favorite_attributes: IAttributesProps[];
}

export interface IFilterDefault {
  langCode?: string;
  categoryId?: number;
}
