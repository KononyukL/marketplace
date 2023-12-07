import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type ICategoriesFavoriteTags } from "@/shared/api/categories-favorite-tags/types";

class CategoriesFavoriteTagsActions {
  async getCategoriesFavoriteTags(
    langCode = "ua",
    size: number = 10,
  ): Promise<ICategoriesFavoriteTags[]> {
    const result = await axiosInstance.get<ICategoriesFavoriteTags[]>(
      `${paths.categoriesFavoriteTags.get_all}${langCode}/${size}`,
    );
    return result.data;
  }
}

const CategoriesFavoriteTagsService = new CategoriesFavoriteTagsActions();
export default CategoriesFavoriteTagsService;
