import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import {
  type IFilterDefault,
  type IFilters,
} from "@/shared/api/filters-category/types";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";

class FiltersCategoryActions {
  async getFiltersCategory({
    langCode = DEFAULT_LOCALE,
    ...params
  }: IFilterDefault) {
    const result = await axiosInstance.get<IFilters>(
      `${paths.filtersCategory.get_all}${langCode}`,
      { params },
    );
    return result.data;
  }
}

const FiltersCategoryActionsService = new FiltersCategoryActions();
export default FiltersCategoryActionsService;
