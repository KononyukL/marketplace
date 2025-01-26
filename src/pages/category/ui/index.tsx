import { CategoryHeader } from "@/pages/category/ui/header-categories";
import { SearchResults } from "@/pages/category/ui/search-results";
import { type ICategoriesFilters } from "@/shared/queries/search/types";
import { AnimalShelter, Form } from "@/shared/ui";
import { Advertisement } from "@/shared/ui/advertisement";
import { ButtonResetFilters } from "@/shared/ui/buttons/ui/button-reset-filters";
import { Pagination } from "@/shared/ui/pagination";
import { Spinner } from "@/shared/ui/spinner";
import { type InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useForm, useWatch } from "react-hook-form";
import { type getServerSideProps } from "../../../../pages/categories/[id]";

export const Category = ({ data, searchTerm }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { query } = useRouter();

  // const categoryId = useMemo(() => Number(query.id) ?? 0, [query.id]);

  // const defaultFilters = useMemo(() => {
  //   return {
  //     defaultFilters: {
  //       categoryId: data?.category?.id || undefined,
  //       size: PAGE_SIZE_CATEGORIES,
  //     },
  //   };
  // }, [data?.category?.id]);

  // const { filters, onCategoriesFiltersChange } =
  //   useCategoriesFilters(defaultFilters);

  const form = useForm<ICategoriesFilters>({
    mode: "all",
    defaultValues: {
      // breedIds: filters.breedIds,
      // ageIds: filters.ageIds,
      // attributeIds: filters.attributeIds,
      // cityIds: filters.cityIds,
    },
  });
  const { control, reset } = form;

  const values = useWatch({ control });

  const hasFilters = Object.values(values).some(Boolean);

  // useEffect(() => {
  //   onMainFilterChange(values);
  // }, [values]);

  // const { data: searchResults, isFetching } = useGetCategoriesSearch({
  //   filters,
  // });
  // const { data: categoriesData } = useGetCategories();

  // const { sortSelected, sortFilter, onSortChange, onMainFilterChange } =
  //   useCategorySortFilterHook({
  //     filters,
  //     onCategoriesFiltersChange,
  //   });

  // const categoryIdToFind = searchResults?.category?.id ?? categoryId;

  // const selectedCategory = categoriesData
  //   ? categoriesData.find((category) => category.id === categoryId)
  //   : null;

  const areAdvertisementsAvailable = Boolean(
    data?.advertisements?.numberOfElements,
  );

  const shouldShowNothingFound = !areAdvertisementsAvailable;

  const renderSearchResults = () => {
    if (shouldShowNothingFound) {
      return (
        <></>
        // <NothingFoundSearch
        //   searchTerm={filters.searchTerm}
        //   locationName={filters.location?.name}
        // />
      );
    }

    // const hasSearchTerm = Boolean(filters.searchTerm);
    const hasAdvertisements =
      data && data.advertisements.numberOfElements > 0;

    return (
      <CategoryHeader segmentTitle={"random"}>
        {true && hasAdvertisements ? (
          <SearchResults
            adsNumber={data.advertisements.totalElements}
            searchTerm={searchTerm}
            locationName={'location name todo add'}
          />
        ) : (
          <h3 className="px-14 py-12 text-4xl font-medium">
            { " todo add selected category title General"}
          </h3>
        )}
      </CategoryHeader>
    );
  };

  return (
    <div className="m-auto  min-h-category max-w-main text-black">
      {data ? renderSearchResults() : <Spinner />}
      <div className="flex gap-8">
        {!shouldShowNothingFound && (
          <Form form={form} onSubmit={() => {}}>
            {/* <MainFilter categoryId={categoryIdToFind} filters={filters} /> */}
          </Form>
        )}
        <div className=" flex-1 py-14 pr-14 ">
          <div className="mb-8 flex justify-between gap-4">
            {hasFilters && (
              <ButtonResetFilters
                onClick={() => {
                  // onCategoriesFiltersChange(null);
                  reset();
                }}
              />
            )}

            {/* <SortFilter
              options={sortFilter}
              onChange={onSortChange}
              selected={sortSelected}
            /> */}
          </div>
          <div className="flex flex-col gap-8">
             {data?.advertisements.content.map((el) => (
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
              ))}
          </div>
          <Pagination
            totalCount={data?.advertisements.totalElements}
            currentPage={0}
            onPageChange={(page) =>console.log(page, 'page')
              // onCategoriesFiltersChange({ ...filters, page })
            }
          />
        </div>
      </div>
      <AnimalShelter />
    </div>
  );
};
