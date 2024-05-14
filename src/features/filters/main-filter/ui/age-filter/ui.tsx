import { Accordion } from "@/shared/ui/accordion";
import { type IAttributes } from "@/shared/api/filters-category/types";
import { ControlledCheckbox } from "@/shared/ui";
import { useControlledCheckboxGroupHook } from "@/shared/ui/controlled-checkbox/lib";

interface IAgeFilter {
  title?: string;
  attributes?: IAttributes[];
}

export const AgeFilter = ({ attributes, title = "" }: IAgeFilter) => {
  const { value, ref, onChange, ...restInputProps } =
    useControlledCheckboxGroupHook({ name: "ageIds" });

  return (
    <Accordion title={title}>
      {attributes?.map((attribute) => (
        <div key={attribute.attribute_id} className="py-2.5">
          <ControlledCheckbox
            id={String(attribute.attribute_id)}
            label={attribute.title}
            ref={ref}
            checked={value?.includes?.(attribute.attribute_id)}
            onChange={onChange(attribute.attribute_id)}
            {...restInputProps}
          />
        </div>
      ))}
    </Accordion>
  );
};
