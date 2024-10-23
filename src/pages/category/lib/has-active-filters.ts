import { type ICategoriesFilters } from "@/shared/queries/search/types";

export const hasActiveFilters = (filters: ICategoriesFilters): boolean => {
  return Object.values(filters).some((value) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return Boolean(value);
  });
};
