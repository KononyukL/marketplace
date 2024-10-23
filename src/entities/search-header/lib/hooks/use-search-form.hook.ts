import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { searchSchema } from "@/shared/lib/validation/validation";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { type ICategoriesSearch } from "@/shared/queries/search/types";

export const useSearchForm = () => {
  const { filters } = useCategoriesFilters();

  const form = useForm<ICategoriesSearch>({
    mode: "all",
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: filters.searchTerm,
      location: filters.location,
    },
  });

  const { setValue, watch } = form;
  const searchTerm = watch("searchTerm");
  const location = watch("location");

  const updateFormWithFilterValues = useCallback(() => {
    setValue("searchTerm", filters.searchTerm);
    setValue("location", filters.location);
  }, [filters, setValue]);

  useEffect(() => {
    updateFormWithFilterValues();
  }, [filters.searchTerm, filters.location, updateFormWithFilterValues]);

  const clearSearchTerm = useCallback(() => {
    setValue("searchTerm", "");
  }, [setValue]);

  const clearLocation = useCallback(() => {
    setValue("location", { name: "", id: 0 });
  }, [setValue]);

  return {
    form,
    searchTerm,
    location,
    setValue,
    clearSearchTerm,
    clearLocation,
  };
};
