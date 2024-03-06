import { type ICategoriesBase } from "@/shared/api/types";
import {
  type IAdvertisementFavorite,
  type IGetAdvertisementFavoriteProps,
} from "@/shared/api/advertisement-favorite/types";

export interface ICategoriesSearch extends IGetAdvertisementFavoriteProps {
  searchTerm: string;
  category: ICategoriesBase;
  advertisements: IAdvertisementFavorite;
}
