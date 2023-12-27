export interface IEntity {
  id: number;
  created: string;
  updated: string;
  ending: string;
  status: string;
  lang_code: string;
}

export interface ICategoriesBase extends Pick<IEntity, "id" | "lang_code"> {
  alias: string;
  title: string;
  description: string;
  tag_title: string;
  parent_id: number;
  available_in_tags: boolean;
  available_in_favorite: boolean;
}
