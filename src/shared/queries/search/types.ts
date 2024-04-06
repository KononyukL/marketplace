import { type IState } from "@/entities/search-header/ui/search-location";
import { type WithRequired } from "@/shared/config";

export interface ICategoriesDefaultFilters {
  size?: number;
  page?: number;
  categoryId?: number;
}

export interface ICategoriesSearch {
  searchTerm: string;
  location?: IState;
}

export interface ICategoriesFilters {
  minPrice?: number;
}

export interface ICategoriesSearchFilters
  extends ICategoriesSearch,
    ICategoriesFilters,
    WithRequired<ICategoriesDefaultFilters, "page" | "size"> {}

export interface CategoriesFiltersResult {
  filters: ICategoriesSearchFilters;
  onCategoriesSearchChange: (filters: ICategoriesSearch) => void;
  onCategoriesFiltersChange: (filters: ICategoriesFilters) => void;
}

export interface ICategoriesFiltersProps {
  defaultFilters?: ICategoriesDefaultFilters;
}
