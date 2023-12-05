export interface ICategories {
  id: number;
  title: string;
  description: string;
  lang_code: string;
}

export interface IComments {
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

export interface IBlog {
  id: number;
  title: string;
  description: string;
  status: string;
  created: string;
  updated: string;
  alias: string;
  categories: ICategories[];
  comments: IComments[];
  lang_code: string;
  short_text: string;
  reading_minutes: 3;
  user_name: string;
  first_name: string;
  last_name: string;
}
