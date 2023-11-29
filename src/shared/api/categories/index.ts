import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import type { ICategories } from "./types";

class CategoriesActions {
  async getCategories(
    langCode: string,
    size: number = 7,
  ): Promise<ICategories[]> {
    const result = await axiosInstance.get<ICategories[]>(
      `${paths.categories.get_all}${langCode}/${size}`,
    );
    return result.data;
  }
}

const CategoriesService = new CategoriesActions();
export default CategoriesService;
