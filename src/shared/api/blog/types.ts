import { type IEntity } from "@/shared/api/types";

interface ICategories {
  id: number;
  title: string;
  description: string;
  lang_code: string;
}

interface IComments extends Omit<IEntity, "updated" | "ending" | "lang_code"> {
  id: number;
  created: string;
  comment: string;
  status: string;
  post_id: number;
  user_id: number;
  user_name: string;
  first_name: string;
  last_name: string;
}

export interface IBlog
  extends ICategories,
    Omit<IComments, "comment" | "post_id" | "user_id"> {
  updated: string;
  alias: string;
  categories: ICategories[];
  comments: IComments[];
  short_text: string;
  reading_minutes: number;
}
