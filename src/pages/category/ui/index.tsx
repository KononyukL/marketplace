import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { NothingFoundSearch } from "@/pages/category/ui/nothing-found-search";
import { SearchResults } from "@/pages/category/ui/search-results";
import { Spinner } from "@/shared/ui/spinner";
import { CategoryHeader } from "@/pages/category/ui/header-categories";
import { AnimalShelter } from "@/shared/ui";
import { useMemo } from "react";
import { Filters } from "@/features/filters";

export const Category = () => {
  const { query } = useRouter();

  const categoryId = useMemo(() => Number(query.id) ?? 0, [query.id]);

  const { filters } = useCategoriesFilters({});
  const { data: searchResults } = useGetCategoriesSearch({ filters });
  const { data: categoriesData } = useGetCategories();

  const categoryIdToFind = searchResults?.category?.id ?? categoryId;
  const selectedCategory = categoriesData
    ? categoriesData.find((category) => category.id === categoryIdToFind)
    : null;

  const areAdvertisementsAvailable = Boolean(
    searchResults?.advertisements?.numberOfElements,
  );

  const shouldShowNothingFound = !areAdvertisementsAvailable;

  const renderSearchResults = () => {
    if (shouldShowNothingFound) {
      return (
        <NothingFoundSearch
          searchTerm={filters.searchTerm}
          locationName={filters.location?.name}
        />
      );
    }

    const hasSearchTerm = Boolean(filters.searchTerm);
    const hasAdvertisements =
      searchResults && searchResults.advertisements.numberOfElements > 0;

    return (
      <CategoryHeader segmentTitle={selectedCategory?.title}>
        {hasSearchTerm && hasAdvertisements ? (
          <SearchResults
            adsNumber={searchResults.advertisements.numberOfElements}
            searchTerm={filters.searchTerm}
            locationName={filters.location?.name}
          />
        ) : (
          <h3 className="px-14 py-12 text-4xl font-medium">
            {selectedCategory?.title ?? "General"}
          </h3>
        )}
      </CategoryHeader>
    );
  };

  return (
    <div className="m-auto  max-w-main text-black">
      {searchResults ? renderSearchResults() : <Spinner />}
      <Filters />
      <AnimalShelter />
    </div>
  );
};
