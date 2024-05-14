import { type IFilters } from "@/shared/api/filters-category/types";
import { Accordion } from "@/shared/ui/accordion";
import { ControlledCheckbox, Input } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { Icons } from "@/shared/config";
import { useControlledCheckboxGroupHook } from "@/shared/ui/controlled-checkbox/lib";
import { useLocationFilter } from "@/features/filters/main-filter/ui/location-filter/lib";

export interface ILocationFilter {
  cities?: IFilters;
}

export const LocationFilter = ({ cities }: ILocationFilter) => {
  const { t } = useTranslation("categories");

  const { onValue, filterValue, filteredBreed } = useLocationFilter(cities);

  const { value, ref, onChange, ...restInputProps } =
    useControlledCheckboxGroupHook({ name: "cityIds" });

  return (
    <>
      <Accordion title={t("filters-categories.location")}>
        <div>
          <Input
            className="group [&>input]:border-input [&>input]:focus-within:border-additional [&>input]:hover:border-additional"
            name="breed"
            placeholder={t("filters-categories.enter-location")}
            onValue={onValue}
            value={filterValue}
            endAdornment={
              <Icons.Search className="group-hover:text-additional" />
            }
          />
        </div>
        {filteredBreed.map((el) => (
          <div key={el.id}>
            <div className="py-2.5">
              <ControlledCheckbox
                id={String(el.id)}
                label={`${el.name}, ${el.state_name}`}
                ref={ref}
                checked={value?.includes?.(el.id)}
                onChange={onChange(el.id)}
                {...restInputProps}
              />
            </div>
          </div>
        ))}
      </Accordion>
    </>
  );
};
