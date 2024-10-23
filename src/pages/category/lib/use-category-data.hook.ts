import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useGetCategories } from "@/shared/queries/categories";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { useCategorySortFilterHook } from "@/pages/category/lib/use-category-sort-filter-hook";
import { PAGE_SIZE_CATEGORIES } from "@/shared/config";
import { type ICategoriesFilters } from "@/shared/queries/search/types";
import { hasActiveFilters } from "./has-active-filters";
import { useCategoryId } from "./use-category-id.hook";

export const useCategoryData = () => {
  const categoryId = useCategoryId();

  const defaultFilters = useMemo(
    () => ({
      defaultFilters: {
        categoryId,
        size: PAGE_SIZE_CATEGORIES,
      },
    }),
    [categoryId],
  );

  const { filters, onCategoriesFiltersChange } =
    useCategoriesFilters(defaultFilters);

  const form = useForm<ICategoriesFilters>({
    mode: "all",
    defaultValues: {
      breedIds: filters.breedIds,
      ageIds: filters.ageIds,
      attributeIds: filters.attributeIds,
      cityIds: filters.cityIds,
    },
  });
  const { control, reset } = form;

  const values = useWatch({ control });

  const hasFilters = useMemo(() => hasActiveFilters(values), [values]);

  const { sortSelected, sortFilter, onSortChange, onMainFilterChange } =
    useCategorySortFilterHook({
      filters,
      onCategoriesFiltersChange,
    });

  useEffect(() => {
    onMainFilterChange(values);
  }, [onMainFilterChange, values]);

  const { data: searchResults, isFetching } = useGetCategoriesSearch({
    filters,
  });

  const { data: categoriesData } = useGetCategories();

  const categoryIdToFind = searchResults?.category?.id ?? categoryId;

  const selectedCategory = useMemo(() => {
    return (
      categoriesData?.find((category) => category.id === categoryIdToFind) ??
      null
    );
  }, [categoriesData, categoryIdToFind]);
  console.log(searchResults, "search res");
  const possibleAdvertisements =
    searchResults?.advertisements?.numberOfElements;

  const areAdvertisementsAvailable = possibleAdvertisements
    ? possibleAdvertisements > 0
    : false;

  const shouldShowNothingFound = !areAdvertisementsAvailable;

  return {
    categoryId,
    categoryIdToFind,
    filters,
    onCategoriesFiltersChange,
    form,
    hasFilters,
    reset,
    sortSelected,
    sortFilter,
    onSortChange,
    searchResults,
    isFetching,
    selectedCategory,
    areAdvertisementsAvailable,
    shouldShowNothingFound,
  };
};
