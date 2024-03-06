import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type ICategoriesSearch } from "@/shared/api/search/types";

class SearchActions {
  async getSearch(
    langCode: string,
    params = { size: 12, page: 1, searchTerm: "", cityIds: 0 },
  ): Promise<ICategoriesSearch> {
    const result = await axiosInstance.get<ICategoriesSearch>(
      `${paths.search.get_all}${langCode}/search`,
      {
        params,
      },
    );
    return result.data;
  }
}

const SearchService = new SearchActions();
export default SearchService;
