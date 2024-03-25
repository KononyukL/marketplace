import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { useMemo } from "react";
import { NothingFoundSearch } from "@/pages/category/ui/nothing-found-search";
import { SearchResults } from "@/pages/category/ui/search-results";

export const Category = () => {
  const { query } = useRouter();

  const { data } = useGetCategories();

  const categoryId = query?.id ? Number(query.id) : 0;

  const defaultFilters = useMemo(() => ({ categoryId }), [categoryId]);

  const { filters } = useCategoriesFilters({
    defaultFilters,
  });

  const categoryItem = data?.find((category) => category.id === categoryId);

  const { data: categories } = useGetCategoriesSearch({ filters });

  const renderSearchResults = () => {
    if (!filters.categoryId || !categories?.advertisements.numberOfElements) {
      return (
        <NothingFoundSearch
          searchTerm={filters.searchTerm}
          locationName={filters.location?.name}
        />
      );
    }
    if (filters?.searchTerm) {
      return (
        <SearchResults
          adsNumber={categories?.advertisements.numberOfElements}
          searchTerm={filters?.searchTerm}
          locationName={filters.location?.name}
        />
      );
    }
    return `${categoryItem?.title}` ?? <div>No title</div>;
  };

  return (
    <div className="m-auto h-screen max-w-main p-14 text-black">
      {renderSearchResults()}
    </div>
  );
};
