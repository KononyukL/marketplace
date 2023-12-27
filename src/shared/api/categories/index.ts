import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type ICategoriesBase } from "@/shared/api/types";

class CategoriesActions {
  async getCategories(
    langCode: string,
    size: number = 7,
  ): Promise<ICategoriesBase[]> {
    const result = await axiosInstance.get<ICategoriesBase[]>(
      `${paths.categories.get_all}${langCode}/${size}`,
    );
    return result.data;
  }
}

const CategoriesService = new CategoriesActions();
export default CategoriesService;
