import { type ICategoriesBase } from "../categories/types";
import {
  type IAdvertisementFavorite,
  type IGetAdvertisementFavoriteProps,
} from "@/shared/api/advertisement-favorite/types";

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
}
