/* eslint-disable @typescript-eslint/no-explicit-any */
import { MainFilter } from "@/features/filters/main-filter";
import { type ISortFilterOption } from "@/features/filters/sort-filter";
import { type IAdvertisement } from "@/shared/api/advertisement-favorite/types";
import {
  type ICategoriesSearchFilters,
  type ICategoriesFilters,
  type SORT_OPTIONS,
} from "@/shared/queries/search/types";
import { Form } from "@/shared/ui";
import { Pagination } from "@/shared/ui/pagination";
import { type UseFormReturn } from "react-hook-form";
import { AdvertisementList } from "../advertisement-list";
import { FilterSortSection } from "../filter-sort-section";

interface MainContentProps {
  form: UseFormReturn<ICategoriesFilters, any, undefined>;
  categoryId: number;
  filters: ICategoriesSearchFilters;
  hasFilters: boolean;
  onResetFilters: () => void;
  sortFilter: ISortFilterOption<SORT_OPTIONS>[];
  onSortChange: (value: any) => void;
  sortSelected: ISortFilterOption<SORT_OPTIONS>;
  advertisements: IAdvertisement[];
  isFetching: boolean;
  totalElements: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  shouldShowNothingFound: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({
  form,
  categoryId,
  filters,
  hasFilters,
  onResetFilters,
  sortFilter,
  onSortChange,
  sortSelected,
  advertisements,
  isFetching,
  totalElements,
  currentPage,
  onPageChange,
  shouldShowNothingFound,
}) => {
  return (
    <div className="flex gap-8">
      {!shouldShowNothingFound && (
        <Form form={form} onSubmit={() => {}}>
          <MainFilter categoryId={categoryId} filters={filters} />
        </Form>
      )}
      <div className="flex-1 py-14 pr-14">
        <FilterSortSection
          hasFilters={hasFilters}
          onResetFilters={onResetFilters}
          sortFilter={sortFilter}
          onSortChange={onSortChange}
          sortSelected={sortSelected}
        />
        <AdvertisementList
          advertisements={advertisements}
          isFetching={isFetching}
        />
        <Pagination
          totalCount={totalElements}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
