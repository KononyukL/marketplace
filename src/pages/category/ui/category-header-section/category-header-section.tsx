import { CategoryHeader } from "@/pages/category/ui/header-categories";
import { NothingFoundSearch } from "@/pages/category/ui/nothing-found-search";
import { SearchResults } from "@/pages/category/ui/search-results";
import { type ICategoriesSearchFilters } from "@/shared/queries/search/types";

interface Props {
  filters: ICategoriesSearchFilters;
  selectedCategoryTitle?: string;
  totalElements?: number;
  areAdvertisementsAvailable: boolean;
}

export const CategoryHeaderSection = ({
  filters,
  selectedCategoryTitle,
  areAdvertisementsAvailable,
  totalElements,
}: Props) => {
  const hasSearchTerm = Boolean(filters.searchTerm);

  if (!areAdvertisementsAvailable) {
    return (
      <NothingFoundSearch
        searchTerm={filters.searchTerm}
        locationName={filters.location?.name}
      />
    );
  }

  return (
    <CategoryHeader segmentTitle={selectedCategoryTitle || "General"}>
      {hasSearchTerm ? (
        <SearchResults
          adsNumber={totalElements ?? 0}
          searchTerm={filters.searchTerm}
          locationName={filters.location?.name}
        />
      ) : (
        <h3 className="px-14 py-12 text-4xl font-medium">
          {selectedCategoryTitle || "General"}
        </h3>
      )}
    </CategoryHeader>
  );
};
