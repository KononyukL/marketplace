import { type BaseCategory } from "../advertisement/types";
import { type ILocalizableEntity, type IEntity } from "../types";

interface ICategories extends ILocalizableEntity, BaseCategory {}

interface IBaseBlog {
  status: string;
  user_name: string;
  first_name: string;
  last_name: string;
}

export interface IAttributes {
  id: number;
  title: string;
  lang_code: string;
  sort_value: number;
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
  attributes: IAttributes[];
  categories: ICategories[];
  comments: IComments[];
  preview_url: string;
  short_text: string;
  reading_minutes: number;
}
