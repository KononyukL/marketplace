import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useCategoriesFilters } from "@/shared/queries/search/use-categories-filters";
import { NothingFoundSearch } from "@/pages/category/ui/nothing-found-search";
import { SearchResults } from "@/pages/category/ui/search-results";
import { Spinner } from "@/shared/ui/spinner";
import { CategoryHeader } from "@/pages/category/ui/header-categories";
import { AnimalShelter } from "@/shared/ui";
import { useEffect, useMemo } from "react";
import { MainFilter } from "@/features/filters/main-filter";
import { SortFilter } from "@/features/filters/sort-filter";
import { Advertisement } from "@/shared/ui/advertisement";
import { useCategorySortFilterHook } from "@/pages/category/lib/use-category-sort-filter-hook";
import { Pagination } from "@/shared/ui/pagination";
import { PAGE_SIZE_CATEGORIES } from "@/shared/config";
import { ButtonResetFilters } from "@/shared/ui/buttons/ui/button-reset-filters";
import { type ICategoriesFilters } from "@/shared/queries/search/types";
import { useForm, useWatch } from "react-hook-form";
import { Form } from "@/shared/ui";

export const Category = () => {
  const { query } = useRouter();

  const categoryId = useMemo(() => Number(query.id) ?? 0, [query.id]);

  const defaultFilters = useMemo(() => {
    return {
      defaultFilters: {
        categoryId: categoryId || undefined,
        size: PAGE_SIZE_CATEGORIES,
      },
    };
  }, [categoryId]);

  const { filters, onCategoriesFiltersChange } =
    useCategoriesFilters(defaultFilters);

  const form = useForm<ICategoriesFilters>({
    mode: "all",
    defaultValues: {
      breedIds: filters.breedIds,
      ageIds: filters.ageIds,
      attributeIds: filters.attributeIds,
      cityIds: filters.cityIds,
    },
  });
  const { control, reset } = form;

  const values = useWatch({ control });

  const hasFilters = Object.values(values).some(Boolean);

  useEffect(() => {
    onMainFilterChange(values);
  }, [values]);

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
      <CategoryHeader segmentTitle={selectedCategory?.title ?? ""}>
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
    <div className="m-auto  min-h-category max-w-main text-black">
      {searchResults ? renderSearchResults() : <Spinner />}
      <div className="flex gap-8">
        {!shouldShowNothingFound && (
          <Form form={form} onSubmit={() => {}}>
            <MainFilter categoryId={categoryIdToFind} filters={filters} />
          </Form>
        )}
        <div className=" flex-1 py-14 pr-14 ">
          <div className="mb-8 flex justify-between gap-4">
            {hasFilters && (
              <ButtonResetFilters
                onClick={() => {
                  onCategoriesFiltersChange(null);
                  reset();
                }}
              />
            )}

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
          <Pagination
            totalCount={searchResults?.advertisements.totalElements}
            currentPage={filters.page}
            onPageChange={(page) =>
              onCategoriesFiltersChange({ ...filters, page })
            }
          />
        </div>
      </div>
      <AnimalShelter />
    </div>
  );
};
