import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type ICategoriesSearch } from "@/shared/api/search/types";
import { type ICategoriesSearchFilters } from "@/shared/queries/search/use-categories-filters";
import { categoriesFilterNormalizers } from "@/shared/api/search/normalizers";
import { parseParams } from "@/shared/config";

class SearchActions {
  async getSearch(
    langCode: string,
    filters: ICategoriesSearchFilters,
  ): Promise<ICategoriesSearch> {
    const normalizedFilters = categoriesFilterNormalizers(filters);

    const result = await axiosInstance.get<ICategoriesSearch>(
      `${paths.search.get_all}${langCode}/search`,
      {
        params: normalizedFilters,
        paramsSerializer: (params) => parseParams(params),
      },
    );
    return result.data;
  }
}

const SearchService = new SearchActions();
export default SearchService;
