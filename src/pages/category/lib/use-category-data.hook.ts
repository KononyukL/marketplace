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
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from "@/shared/queries/constants";
import { deepEqual } from "@/shared/lib/deep-equal/deep-equal";

export const useCategoryData = () => {
  const categoryId = useCategoryId();

  const defaultFilters = useMemo(
    () => ({
      defaultFilters: {
        categoryId,
        size: PAGE_SIZE_CATEGORIES,
        searchTerm: "",
      },
    }),
    [categoryId],
  );

  const { filters, onCategoriesFiltersChange, resetCategoriesFilters } =
    useCategoriesFilters(defaultFilters);

  const form = useForm<ICategoriesFilters>({
    mode: "all",
    defaultValues: {
      breedIds: filters?.breedIds,
      ageIds: filters?.ageIds,
      attributeIds: filters?.attributeIds,
      cityIds: filters?.cityIds,
    },
  });
  const { control, reset } = form;

  const values = useWatch({ control });

  const hasFilters = useMemo(
    () =>
      hasActiveFilters({
        ...values,
        page: values?.page || DEFAULT_PAGE_NUMBER,
        size: values?.size || DEFAULT_PAGE_SIZE,
        location: {
          id: values?.location?.id || 0,
          name: values?.location?.name || "",
        },
      }),
    [values],
  );

  const { sortSelected, sortFilter, onSortChange, onMainFilterChange } =
    useCategorySortFilterHook({
      filters,
      onCategoriesFiltersChange,
    });

  // TODO: INFINITE LOOP
  // useEffect(() => {
  //   if (!deepEqual(filters, values)) {
  //     onMainFilterChange({
  //       ...values,
  //       page: values?.page || DEFAULT_PAGE_NUMBER,
  //       size: values?.size || DEFAULT_PAGE_SIZE,
  //       location: {
  //         id: values?.location?.id || 0,
  //         name: values?.location?.name || "",
  //       },
  //     });
  //   }
  // }, [onMainFilterChange, values, filters]);

  useEffect(() => {
    const sanitizedValues: ICategoriesFilters = {
      ...values,
      page: values?.page || DEFAULT_PAGE_NUMBER,
      size: values?.size || DEFAULT_PAGE_SIZE,
      location: {
        id: values?.location?.id || 0,
        name: values?.location?.name || "",
      },
    };

    if (!deepEqual(filters, sanitizedValues)) {
      onMainFilterChange(sanitizedValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onMainFilterChange, values, filters]);

  const { data: searchResults, isFetching } = useGetCategoriesSearch({
    filters,
  });
  // todo: when im on advertisements page after i entered in search header something
  // i cant change category when i enter something else, so we need to think about how we can refetch that data or update category name or something like that
  const { data: categoriesData } = useGetCategories();

  console.log(categoriesData, "categories data");
  const selectedCategory = useMemo(() => {
    const categoryIdToFind = searchResults?.category?.id ?? categoryId;
    return categoriesData?.find((category) => category.id === categoryIdToFind);
  }, [categoriesData, categoryId, searchResults]);
  console.log(searchResults, "search res");
  console.log(selectedCategory, "selected");
  const possibleAdvertisements =
    searchResults?.advertisements?.numberOfElements;

  const areAdvertisementsAvailable = possibleAdvertisements
    ? possibleAdvertisements > 0
    : false;

  const shouldShowNothingFound = !areAdvertisementsAvailable;

  return {
    categoryId,
    categoryIdToFind: selectedCategory?.id,
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
    resetCategoriesFilters,
  };
};
