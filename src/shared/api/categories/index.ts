import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import type { ICategories } from "./types";

class CategoriesActions {
  async getCategories(langCode: string = "ua"): Promise<ICategories[]> {
    const result = await axiosInstance.get<ICategories[]>(
      paths.categories.get_all + langCode,
    );
    return result.data;
  }
}

const CategoriesService = new CategoriesActions();
export default CategoriesService;
