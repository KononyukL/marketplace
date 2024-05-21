import { type WithRequired } from "@/shared/config";

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

export interface ICategoriesDefaultFilters {
  size?: number;
  page?: number;
  categoryId?: number;
}

export interface ICategoriesSearch {
  searchTerm: string;
  location?: IState;
}

export interface ICategoriesFilters {
  breedIds?: number[];
  attributeIds?: number[];
  statesIds?: number[];
  cityIds?: number[];
  sortOption?: SORT_OPTIONS;
  minPrice?: number;
  maxPrice?: number;
  ageIds?: number[];
  genderId?: number;
}

export interface ICategoriesSearchFilters
  extends ICategoriesSearch,
    ICategoriesFilters,
    WithRequired<ICategoriesDefaultFilters, "page" | "size"> {}

export interface CategoriesFiltersResult {
  filters: ICategoriesSearchFilters;
  onCategoriesSearchChange: (filters: ICategoriesSearch) => void;
  onCategoriesFiltersChange: (filters: ICategoriesFilters) => void;
}

export interface ICategoriesFiltersProps {
  defaultFilters?: ICategoriesDefaultFilters;
}
