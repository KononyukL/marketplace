import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type ICategoriesBase } from "@/shared/api/types";

class CategoriesAllActions {
  async getCategoriesAll(langCode: string): Promise<ICategoriesBase[]> {
    const result = await axiosInstance.get<ICategoriesBase[]>(
      `${paths.categoriesAll.get_all}${langCode}`,
    );
    return result.data;
  }
}

const CategoriesAllService = new CategoriesAllActions();
export default CategoriesAllService;
