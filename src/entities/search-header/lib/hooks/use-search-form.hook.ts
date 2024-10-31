import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { searchSchema } from "@/shared/lib/validation/validation";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from "@/shared/queries/constants";
import { type ICategoriesSearchPageable } from "@/shared/queries/search/types";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";

export const useSearchForm = () => {
  const { filters, onCategoriesFiltersChange } = useCategoriesFilters();

  const form = useForm<ICategoriesSearchPageable>({
    mode: "all",
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: filters?.searchTerm || "",
      location: {
        id: filters.location?.id || 0,
        name: filters.location?.name || "",
      },
      size: filters.size || DEFAULT_PAGE_SIZE,
      page: filters.page || DEFAULT_PAGE_NUMBER,
      categoryId: filters?.categoryId,
    },
  });

  const { setValue, watch } = form;
  const searchTerm = watch("searchTerm");
  const location = watch("location");

  const updateFormWithFilterValues = useCallback(() => {
    setValue("searchTerm", filters?.searchTerm || "");
    setValue("location", {
      id: filters.location?.id || 0,
      name: filters.location?.name || "",
    });
    setValue("size", filters.size || DEFAULT_PAGE_SIZE);
    setValue("page", filters.page || DEFAULT_PAGE_NUMBER);
    setValue("categoryId", filters?.categoryId);
  }, [filters, setValue]);

  useEffect(() => {
    updateFormWithFilterValues();
  }, [filters, updateFormWithFilterValues]);

  const clearSearchTerm = useCallback(() => {
    setValue("searchTerm", "");
  }, [setValue]);

  const clearLocation = useCallback(() => {
    setValue("location", { id: 0, name: "" });
  }, [setValue]);

  const onSubmit: SubmitHandler<ICategoriesSearchPageable> = useCallback(
    (values) => {
      const sanitizedLocation = {
        id: values.location?.id ?? 0,
        name: values.location?.name ?? "",
      };
      console.log(values, "values in on submit handler");
      onCategoriesFiltersChange({
        searchTerm: values?.searchTerm || "",
        location: sanitizedLocation,
        size: values.size || DEFAULT_PAGE_SIZE,
        page: values.page || DEFAULT_PAGE_NUMBER,
        categoryId: values?.categoryId,
      });
    },
    [onCategoriesFiltersChange],
  );

  return {
    form,
    searchTerm,
    location,
    setValue,
    clearSearchTerm,
    clearLocation,
    onSubmit,
  };
};
