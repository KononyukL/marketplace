import { type IAttributes } from "@/shared/api/filters-category/types";
import { Accordion } from "@/shared/ui/accordion";
import { useState } from "react";
import { ControlledCheckbox } from "@/shared/ui";
import { useControlledCheckboxGroupHook } from "@/shared/ui/controlled-checkbox/lib";

const MAX_VISIBLE_ATTRIBUTES = 5;

export interface IFeaturesFilter {
  title: string;
  attributes: IAttributes[];
}

export const FeaturesFilter = ({ attributes, title }: IFeaturesFilter) => {
  const [open, setOpen] = useState(false);

  const { value, ref, onChange, ...restInputProps } =
    useControlledCheckboxGroupHook({ name: "attributeIds" });

  const visibleAttributes = open
    ? attributes
    : attributes.slice(0, MAX_VISIBLE_ATTRIBUTES);

  return (
    <>
      <Accordion title={title} className="mt-6">
        {visibleAttributes.map((attribute) => (
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
        {attributes.length > MAX_VISIBLE_ATTRIBUTES && (
          <div
            className="mt-6 cursor-pointer text-xs font-semibold"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? "Показати більше" : "Приховати"}
          </div>
        )}
      </Accordion>
    </>
  );
};
