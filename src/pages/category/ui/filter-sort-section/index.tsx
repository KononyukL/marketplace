import {
  type ISortFilterOption,
  SortFilter,
} from "@/features/filters/sort-filter";
import { type SORT_OPTIONS } from "@/shared/queries/search/types";
import { ButtonResetFilters } from "@/shared/ui/buttons/ui/button-reset-filters";
import React from "react";

interface FilterSortSectionProps {
  hasFilters: boolean;
  onResetFilters: () => void;
  sortFilter: ISortFilterOption<SORT_OPTIONS>[];
  onSortChange: (value: ISortFilterOption<SORT_OPTIONS>) => void;
  sortSelected: ISortFilterOption<SORT_OPTIONS>;
}

export const FilterSortSection: React.FC<FilterSortSectionProps> = ({
  hasFilters,
  onResetFilters,
  sortFilter,
  onSortChange,
  sortSelected,
}) => (
  <div className="mb-8 flex justify-between gap-4">
    {hasFilters && <ButtonResetFilters onClick={onResetFilters} />}
    <SortFilter
      options={sortFilter}
      onChange={onSortChange}
      selected={sortSelected}
    />
  </div>
);
