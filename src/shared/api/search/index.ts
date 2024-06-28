import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import {
  type ICategoriesSearch,
  type ISearchData,
} from "@/shared/api/search/types";
import { categoriesFilterNormalizers } from "@/shared/api/search/normalizers";
import { convertCases, parseParams } from "@/shared/config";
import { type ICategoriesSearchFilters } from "@/shared/queries/search/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";

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

  async search({
    langCode = DEFAULT_LOCALE,
    filters,
  }: ISearchData): Promise<ICategoriesSearch> {
    const normalizedFilters = categoriesFilterNormalizers(filters);

    const result = await axiosInstance.post<ICategoriesSearch>(
      `${paths.search.get_all}${langCode}/search`,
      convertCases("snakeCase", normalizedFilters),
    );
    return result.data;
  }
}

const SearchService = new SearchActions();
export default SearchService;
