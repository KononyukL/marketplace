import { SearchLocation } from "@/entities/search-header/ui/search-location";
import { Form } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { ButtonSearch } from "@/shared/ui/buttons/ui/button-search";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useRouter } from "next/router";
import { SearchCategories } from "@/entities/search-header/ui/search-categories";
import {
  GLOBAL_SEARCH_KEY,
  useCategoriesFilters,
} from "@/shared/queries/search/use-categories-filters";
import { memo, useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/shared/lib/validation/validation";
import { type ICategoriesSearch } from "@/shared/queries/search/types";

export const SearchHeader = memo(() => {
  const { filters, onCategoriesSearchChange } = useCategoriesFilters();

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

  const { refetch } = useGetCategoriesSearch({
    filters,
    config: { enabled: false },
  });

  const router = useRouter();

  const redirectToCategoryBySearch = async () => {
    const isCategoriesPage = router.pathname.includes("categories");
    const hasSearchTerm = Boolean(filters.searchTerm);

    if (!isCategoriesPage && hasSearchTerm) {
      const { data } = await refetch();

      if (data) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.append(GLOBAL_SEARCH_KEY, filters.searchTerm);
        const search = searchParams.toString();
        const categoryId = data?.category?.id ?? 0;

        const pathname = `/categories/${categoryId}?${search}`;
        void router.push(pathname);
      }
    }
  };

  const updateFormWithFilterValues = () => {
    setValue("searchTerm", filters.searchTerm);
    setValue("location", filters.location);
  };

  useEffect(() => {
    void redirectToCategoryBySearch();
    updateFormWithFilterValues();
    // eslint-disable-next-line
  }, [filters.searchTerm, filters.location]);

  const onSubmit = (values: ICategoriesSearch) => {
    onCategoriesSearchChange(values);
  };

  const clearSearchTerm = useCallback(
    () => setValue("searchTerm", ""),
    [setValue],
  );
  const clearLocation = useCallback(
    () => setValue("location", { name: "", id: 0 }),
    [setValue],
  );

  const isSubmitDisabled = !searchTerm && !filters.searchTerm;

  return (
    <div className="flex  justify-center">
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex gap-1">
          <div className="flex w-search items-center rounded border border-solid border-border-2 bg-white">
            <SearchCategories
              onClear={clearSearchTerm}
              hideClear={!searchTerm}
            />
            <SearchLocation
              defaultLocation={location}
              onClear={clearLocation}
            />
          </div>
          <ButtonSearch disabled={isSubmitDisabled} />
        </div>
      </Form>
    </div>
  );
});

SearchHeader.displayName = "SearchHeader";
