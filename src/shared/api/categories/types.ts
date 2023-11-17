export interface ICategories {
  id: number;
  langCode: string;
  alias: string;
  title: string;
  tagTitle: string;
  description: string;
  parentId: number;
  availableInTags: boolean;
  availableInFavorite: boolean;
}
