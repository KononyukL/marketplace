import { type PaginationType } from "@/shared/config";

export enum SORT_OPTIONS {
  RATING_HIGHEST = "RATING_HIGHEST",
  RATING_LOWEST = "RATING_LOWEST",
  PRICE_LOWEST = "PRICE_LOWEST",
  PRICE_HIGHEST = "PRICE_HIGHEST",
  NEWEST = "NEWEST",
  OLDEST = "OLDEST",
  DEFAULT = "DEFAULT",
}

export interface IState {
  id: number;
  name: string;
}

export interface ICategoriesSearch {
  searchTerm: string;
  location?: IState;
}

export interface ICategoriesDefaultFilters extends ICategoriesSearch {
  size?: number;
  page?: number;
  categoryId?: number;
}

export interface ICategoriesFilters
  extends PaginationType,
    Partial<ICategoriesSearch> {
  breedIds?: number[];
  attributeIds?: number[];
  statesIds?: number[];
  cityIds?: number[];
  sortOption?: SORT_OPTIONS;
  minPrice?: number;
  maxPrice?: number;
  ageIds?: number[];
  genderId?: number;
  categoryId?: number;
}
export interface ICategoriesSearchFilters
  extends PaginationType,
    ICategoriesFilters {}

export interface ICategoriesSearchPageable extends ICategoriesSearchFilters {}

export interface ICategoriesFiltersProps {
  defaultFilters?: ICategoriesDefaultFilters;
}
