import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { type ICategoriesSearchFilters } from "@/shared/queries/search/types";
import { useGetFiltersCategory } from "@/shared/queries/filters-category";
import { BreedFilter } from "@/features/filters/main-filter/ui/breeds-filter";
import { PriceFilter } from "@/features/filters/main-filter/ui/price-filter";
import { Gender } from "@/features/filters/main-filter/ui/gender";
import { AgeFilter } from "@/features/filters/main-filter/ui/age-filter";
import { LocationFilter } from "@/features/filters/main-filter/ui/location-filter";
import { FeaturesFilter } from "@/features/filters/main-filter/ui/features-filter";

interface IFilters {
  categoryId: number;
  cityId?: number;
  filters: ICategoriesSearchFilters;
}

export const MainFilter = ({ categoryId, filters }: IFilters) => {
  const { t } = useTranslation("categories");
  const { locale } = useRouter();

  const { data } = useGetFiltersCategory({ categoryId, langCode: locale });
  const [age, gender] = data?.favorite_attributes || [];

  return (
    <div className="py-14 pl-14">
      <div className=" w-full max-w-[320px]  bg-white p-6">
        <h3 className="mb-8 text-xl">{t("filters-categories.filters")}</h3>
        <div className="flex flex-col items-center">
          {!!data?.breeds?.length && <BreedFilter breeds={data?.breeds} />}
          <PriceFilter
            min_price={filters?.minPrice ?? data?.price_range.min_price}
            max_price={filters?.maxPrice ?? data?.price_range.max_price}
          />
          {gender?.attributes && (
            <Gender title={gender?.title} attributes={gender?.attributes} />
          )}
          {age?.attributes && (
            <AgeFilter title={age?.title} attributes={age?.attributes} />
          )}

          <LocationFilter cities={data} />
          {data?.attributes.map((el) => (
            <FeaturesFilter
              key={el.title}
              title={el.title}
              attributes={el.attributes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
