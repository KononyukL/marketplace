import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { useMemo } from "react";
import { NothingFoundSearch } from "@/pages/category/ui/nothing-found-search";
import { SearchResults } from "@/pages/category/ui/search-results";
import { Spinner } from "@/shared/ui/spinner";
import { HeaderCategories } from "@/pages/category/ui/header-categories";
import { AnimalShelter } from "@/shared/ui";

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
    if (filters.searchTerm) {
      return (
        <HeaderCategories segmentTitle={categoryItem?.title}>
          <SearchResults
            adsNumber={categories.advertisements.numberOfElements}
            searchTerm={filters.searchTerm}
            locationName={filters.location?.name}
          />
        </HeaderCategories>
      );
    }
    return (
      (
        <HeaderCategories segmentTitle={categoryItem?.title}>
          <h3 className="px-14 py-12 text-4xl font-medium">
            {categoryItem?.title}
          </h3>
        </HeaderCategories>
      ) ?? <div>No title</div>
    );
  };

  return (
    <div className="m-auto  max-w-main text-black">
      {categories ? renderSearchResults() : <Spinner />}
      <AnimalShelter />
    </div>
  );
};
