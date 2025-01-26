import { SearchCategories } from "@/entities/search-header/ui/search-categories";
import { searchSchema } from "@/shared/lib/validation/validation";
import { type ICategoriesSearch } from "@/shared/queries/search/types";
import { Form } from "@/shared/ui";
import { ButtonSearch } from "@/shared/ui/buttons/ui/button-search";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";

export const SearchHeader = memo(() => {
  // const { filters, onCategoriesSearchChange } = useCategoriesFilters();

  const form = useForm<ICategoriesSearch>({
    mode: "all",
    resolver: zodResolver(searchSchema),

  });
  const { setValue, watch } = form;

  const searchTerm = watch("searchTerm");
  const location = watch("location");

  // const { mutate: searchCategories, isLoading } = useCategoriesSearch();

  const router = useRouter();

  const redirectToCategoryBySearch = () => {
    // const hasSearchTerm = Boolean(filters.searchTerm);

    // if (hasSearchTerm) {
    //   const { searchTerm, location, size, page } = filters;

    //   searchCategories(
    //     { filters: { searchTerm, location, size, page } },
    //     {
    //       onSuccess: (data) => {
    //         const searchParams = new URLSearchParams(window.location.search);
    //         searchParams.delete(CATEGORIES_SEARCH_KEY);
    //         searchParams.append(GLOBAL_SEARCH_KEY, filters.searchTerm);
    //         const search = searchParams.toString();
    //         const categoryId = data?.category?.id ?? 0;
    //         const pathname = `/categories/${categoryId}?${search}`;
    //         void router.replace(pathname);
    //       },
    //     },
    //   );
    // }
  };

  // const updateFormWithFilterValues = () => {
  //   setValue("searchTerm", filters.searchTerm);
  //   setValue("location", filters.location);
  // };

  // useEffect(() => {
  //   void redirectToCategoryBySearch();
  //   updateFormWithFilterValues();
  //   // eslint-disable-next-line
  // }, [filters.searchTerm, filters.location]);

  const onSubmit = (values: ICategoriesSearch) => {
    console.log(values, 'values are')
    router.push(`/categories/${0}?search=${values.searchTerm}`)
    // onCategoriesSearchChange(values);
  };

  const clearSearchTerm = useCallback(
    () => setValue("searchTerm", ""),
    [setValue],
  );
  const clearLocation = useCallback(
    () => setValue("location", { name: "", id: 0 }),
    [setValue],
  );

  // const isSubmitDisabled = (!searchTerm && !filters.searchTerm) || isLoading;

  return (
    <div className="flex  justify-center">
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex gap-1">
          <div className="flex w-search items-center rounded border border-solid border-border-2 bg-white">
            <SearchCategories
              onClear={clearSearchTerm}
              hideClear={!searchTerm}
            />
            {/* <SearchLocation
              defaultLocation={location}
              onClear={clearLocation}
            /> */}
          </div>
          <ButtonSearch disabled={false} />
        </div>
      </Form>
    </div>
  );
});

SearchHeader.displayName = "SearchHeader";
