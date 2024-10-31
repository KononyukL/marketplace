import { SearchCategories } from "@/entities/search-header/ui/search-categories";
import { SearchLocation } from "@/entities/search-header/ui/search-location";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from "@/shared/queries/constants";
import { type ICategoriesSearchPageable } from "@/shared/queries/search/types";
import { Form } from "@/shared/ui";
import { ButtonSearch } from "@/shared/ui/buttons/ui/button-search";
import { memo, useCallback } from "react";
import { type SubmitHandler } from "react-hook-form";
import { useSearchForm } from "../lib/hooks";
import { useSearch } from "../lib/hooks/use-search.hook";

export const SearchHeader = memo(() => {
  const {
    form,
    searchTerm,
    location,
    clearSearchTerm,
    clearLocation,
    onSubmit,
  } = useSearchForm();
  const { performSearch, isLoading } = useSearch();

  const handleFormSubmit: SubmitHandler<ICategoriesSearchPageable> = (
    values,
  ) => {
    console.log("SearchHeader: Form submitted with values:", values);
    // onSubmit(values);
    performSearch({
      searchTerm: values.searchTerm || "",
      location: {
        id: values.location?.id ?? 0,
        name: values.location?.name ?? "",
      },
      size: values.size || DEFAULT_PAGE_SIZE,
      page: values.page || DEFAULT_PAGE_NUMBER,
      categoryId: values?.categoryId,
    });
  };

  const isSubmitDisabled = !searchTerm || isLoading;

  return (
    <div className="flex justify-center">
      <Form form={form} onSubmit={handleFormSubmit}>
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
