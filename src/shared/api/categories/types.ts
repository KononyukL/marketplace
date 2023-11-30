export interface ICategories {
  id: number;
  alias: string;
  title: string;
  description: string;
  lang_code: string;
  tag_title: string;
  parent_id: number;
  available_in_tags: boolean;
  available_in_favorite: boolean;
}
