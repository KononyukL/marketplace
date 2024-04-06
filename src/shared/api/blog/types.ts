import { type BaseCategory } from "../advertisement/types";
import { type ILocalizableEntity, type IEntity } from "../types";

interface ICategories extends ILocalizableEntity, BaseCategory {}

interface IBaseBlog {
  status: string;
  user_name: string;
  first_name: string;
  last_name: string;
}

interface IComments extends IEntity {
  comment: string;
  status: string;
  post_id: number;
  user_id: number;
  user_name: string;
  first_name: string;
  last_name: string;
}

export interface IBlog extends ICategories, IBaseBlog {
  alias: string;
  categories: ICategories[];
  comments: IComments[];
  short_text: string;
  reading_minutes: number;
}
