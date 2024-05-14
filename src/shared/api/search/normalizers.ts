import { type ICategoriesResponseFilters } from "@/shared/api/search/types";
import { type ICategoriesSearchFilters } from "@/shared/queries/search/types";

export const categoriesFilterNormalizers = (
  filters: ICategoriesSearchFilters,
): ICategoriesResponseFilters => {
  const normalizedFilters: ICategoriesResponseFilters = {
    size: filters.size,
    page: filters.page,
    searchTerm: filters.searchTerm,
    cityIds: filters.location?.id ? [filters.location?.id] : undefined,
    categoryId: filters.categoryId,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    sortOption: filters.sortOption,
    breedIds: filters.breedIds,
    attributeIds: filters.attributeIds,
    ageIds: filters.ageIds,
    genderIds: filters.genderId,
  };

  return Object.fromEntries(
    Object.entries(normalizedFilters).filter(([_, value]) => value),
  ) as ICategoriesResponseFilters;
};
