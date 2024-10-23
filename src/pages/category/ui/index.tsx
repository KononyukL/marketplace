import { AnimalShelter } from "@/shared/ui";
import { Spinner } from "@/shared/ui/spinner";
import { useCategoryData } from "../lib";
import { CategoryHeaderSection } from "./category-header-section/category-header-section";
import { MainContent } from "./main-content";

export const Category = () => {
  const {
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
  } = useCategoryData();

  const onResetFilters = () => {
    onCategoriesFiltersChange(null);
    reset();
  };

  const onPageChange = (page: number) => {
    onCategoriesFiltersChange({ ...filters, page });
  };

  return (
    <div className="m-auto min-h-category max-w-main text-black">
      {searchResults && !isFetching ? (
        <CategoryHeaderSection
          filters={filters}
          selectedCategoryTitle={selectedCategory?.title}
          totalElements={searchResults.advertisements.totalElements}
          areAdvertisementsAvailable={areAdvertisementsAvailable}
        />
      ) : (
        <Spinner />
      )}
      <MainContent
        form={form}
        categoryId={categoryIdToFind ?? 0}
        filters={filters}
        hasFilters={hasFilters}
        onResetFilters={onResetFilters}
        sortFilter={sortFilter}
        onSortChange={onSortChange}
        sortSelected={sortSelected}
        advertisements={searchResults?.advertisements.content ?? []}
        isFetching={isFetching}
        totalElements={searchResults?.advertisements.totalElements ?? 0}
        currentPage={filters.page}
        onPageChange={onPageChange}
        shouldShowNothingFound={shouldShowNothingFound}
      />
      <AnimalShelter />
    </div>
  );
};
