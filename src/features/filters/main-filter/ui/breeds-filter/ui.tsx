import { type IBreeds } from "@/shared/api/filters-category/types";
import { Accordion } from "@/shared/ui/accordion";
import { ControlledCheckbox, Input } from "@/shared/ui";
import { useTranslation } from "next-i18next";
import { Icons } from "@/shared/config";
import { useControlledCheckboxGroupHook } from "@/shared/ui/controlled-checkbox/lib";
import { useBreadFilter } from "@/features/filters/main-filter/ui/breeds-filter/lib";

export interface IBreedFilter {
  breeds?: IBreeds[];
}

export const BreedFilter = ({ breeds }: IBreedFilter) => {
  const { t } = useTranslation("categories");

  const { onValue, filteredBreed, filterValue } = useBreadFilter(breeds);

  const { value, ref, onChange, ...restInputProps } =
    useControlledCheckboxGroupHook({ name: "breedIds" });

  return (
    <>
      <Accordion title={t("filters-categories.breed")}>
        <Input
          className="group [&>input]:border-border-2 [&>input]:focus-within:border-additional  [&>input]:hover:border-additional"
          name="breed"
          placeholder={t("filters-categories.search-breed")}
          onValue={onValue}
          value={filterValue}
          endAdornment={
            <Icons.Search className="group-hover:text-additional" />
          }
        />
        {filteredBreed.map((el) => (
          <div key={el.id}>
            <div className="py-2.5">
              <ControlledCheckbox
                id={String(el.id)}
                label={`${el.title} (${el.advertisements_count})`}
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
