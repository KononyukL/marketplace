import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import type { ICategories } from "./types";

class CategoriesAllActions {
  async getCategoriesAll(langCode: string): Promise<ICategories[]> {
    const result = await axiosInstance.get<ICategories[]>(
      `${paths.categoriesAll.get_all}${langCode}`,
    );
    return result.data;
  }
}

const CategoriesAllService = new CategoriesAllActions();
export default CategoriesAllService;
