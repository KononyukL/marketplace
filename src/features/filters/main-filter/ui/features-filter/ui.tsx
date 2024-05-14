import { type IAttributes } from "@/shared/api/filters-category/types";
import { Accordion } from "@/shared/ui/accordion";
import { useState } from "react";
import { ControlledCheckbox } from "@/shared/ui";
import { useControlledCheckboxGroupHook } from "@/shared/ui/controlled-checkbox/lib";

export interface IFeaturesFilter {
  title: string;
  attributes: IAttributes[];
}

export const FeaturesFilter = ({ attributes, title }: IFeaturesFilter) => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  const { value, ref, onChange, ...restInputProps } =
    useControlledCheckboxGroupHook({ name: "attributeIds" });

  return (
    <>
      <Accordion title={title}>
        {!open
          ? attributes
              .map((attribute) => (
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
              ))
              .slice(0, 5)
          : attributes.map((attribute) => (
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
        {attributes.length > 5 && (
          <div
            className="mt-6 cursor-pointer text-xs font-semibold"
            onClick={onClick}
          >
            {!open ? "Показати більше" : "Приховати"}
          </div>
        )}
      </Accordion>
    </>
  );
};
