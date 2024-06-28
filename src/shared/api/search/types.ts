import { type ICategoriesBase } from "../categories/types";
import {
  type IAdvertisementFavorite,
  type IGetAdvertisementFavoriteProps,
} from "@/shared/api/advertisement-favorite/types";
import {
  type ICategoriesSearchFilters,
  type SORT_OPTIONS,
} from "@/shared/queries/search/types";

export interface ICategoriesSearch extends IGetAdvertisementFavoriteProps {
  searchTerm: string;
  category: ICategoriesBase;
  advertisements: IAdvertisementFavorite;
}

export interface ICategoriesResponseFilters {
  size: number;
  page: number;
  searchTerm?: string;
  categoryId?: number;
  cityIds?: number[];
  minPrice?: number;
  maxPrice?: number;
  attributeIds?: number[];
  breedIds?: number[];
  ageIds?: number[];
  genderIds?: number;
  sortOption?: SORT_OPTIONS;
}

export interface ISearchData {
  langCode?: string;
  filters: ICategoriesSearchFilters;
}
