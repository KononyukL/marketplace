import { Accordion } from "@/shared/ui/accordion";
import { type IAttributes } from "@/shared/api/filters-category/types";
import { RadioButton } from "@/shared/ui/radio-button";
import { useGenderData } from "@/features/filters/main-filter/ui/gender/lib";

interface IGender {
  title?: string;
  attributes?: IAttributes[];
}

export const Gender = ({ attributes, title = "" }: IGender) => {
  const { value, radioOptions, onChange } = useGenderData({
    attributes,
    name: "genderId",
  });

  return (
    <Accordion title={title}>
      {attributes?.map((el) => (
        <RadioButton
          key={el.attribute_id}
          options={radioOptions}
          value={value}
          onChange={onChange}
        />
      ))}
    </Accordion>
  );
};
