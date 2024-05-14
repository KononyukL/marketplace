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
import { MainFilter } from "@/features/filters/main-filter";
import { SortFilter } from "@/features/filters/sort-filter";
import { Advertisement } from "@/shared/ui/advertisement";
import { useCategorySortFilterHook } from "@/pages/category/lib/use-category-sort-filter-hook";

export const Category = () => {
  const { query } = useRouter();

  const categoryId = useMemo(() => Number(query.id) ?? 0, [query.id]);

  const defaultFilters = useMemo(() => {
    return {
      defaultFilters: { categoryId: categoryId || undefined, size: 5 },
    };
  }, [categoryId]);

  const { filters, onCategoriesFiltersChange } =
    useCategoriesFilters(defaultFilters);

  const { data: searchResults, isFetching } = useGetCategoriesSearch({
    filters,
  });

  const { data: categoriesData } = useGetCategories();

  const { sortSelected, sortFilter, onSortChange, onMainFilterChange } =
    useCategorySortFilterHook({
      filters,
      onCategoriesFiltersChange,
    });

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
            adsNumber={searchResults.advertisements.totalElements}
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
    <div className="min-h-category  m-auto max-w-main text-black">
      {searchResults ? renderSearchResults() : <Spinner />}
      <div className="flex gap-8">
        {!shouldShowNothingFound && (
          <MainFilter
            categoryId={categoryIdToFind}
            onMainFilterChange={onMainFilterChange}
            filters={filters}
          />
        )}
        <div className="flex-1 py-14 pr-14">
          <div className="mb-8 flex items-center justify-between">
            <div></div>
            <SortFilter
              options={sortFilter}
              onChange={onSortChange}
              selected={sortSelected}
            />
          </div>
          <div className="flex flex-col gap-8">
            {!isFetching ? (
              searchResults?.advertisements.content.map((el) => (
                <Advertisement
                  key={el.id}
                  top={false}
                  img={el.images}
                  ending={el.updated}
                  title={el.title}
                  prise={el.price}
                  text={el.description}
                  author={el.author.shortName}
                  city={el.location.city_name}
                  cityType={el.location.city_type_short_title}
                  reviewsCount={el.rating}
                  attributes={el.attributes}
                  favoriteAttributes={el.favorite_attributes}
                  userAvatarUrl={el.author.user_avatar_url}
                  id={el.id}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
      <AnimalShelter />
    </div>
  );
};
