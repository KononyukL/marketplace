import { SearchCategories } from "@/entities/search-header/ui/search-categories";
import { SearchLocation } from "@/entities/search-header/ui/search-location";
import { type ICategoriesSearch } from "@/shared/queries/search/types";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { Form } from "@/shared/ui";
import { ButtonSearch } from "@/shared/ui/buttons/ui/button-search";
import { memo } from "react";
import { type SubmitHandler } from "react-hook-form";
import { useSearchForm, useSearchRedirection } from "../lib/hooks";

export const SearchHeader = memo(() => {
  const { form, searchTerm, location, clearSearchTerm, clearLocation } =
    useSearchForm();
  const { isLoading } = useSearchRedirection();
  const { filters, onCategoriesSearchChange } = useCategoriesFilters();

  const onSubmit: SubmitHandler<ICategoriesSearch> = (values) => {
    onCategoriesSearchChange(values);
  };

  const isSubmitDisabled = (!searchTerm && !filters.searchTerm) || isLoading;

  return (
    <div className="flex justify-center">
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
