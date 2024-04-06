import { type BaseCategory } from "../advertisement/types";
import { type IEntity } from "../types";

export interface ICategoriesBase extends IEntity, BaseCategory {
  alias: string;
  tag_title: string;
  parent_id: number;
  available_in_tags: boolean;
  available_in_favorite: boolean;
}
