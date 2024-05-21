import { useFormContext } from "react-hook-form";
import { useCallback, useMemo } from "react";
import type { IAttributes } from "@/shared/api/filters-category/types";

interface IGender {
  attributes?: IAttributes[];
  name?: string;
}

export function useGenderData({ attributes, name = "" }: IGender) {
  const { setValue, watch } = useFormContext();
  const value = watch(name);

  const onChange = useCallback(
    (value: string) => {
      setValue(name, value);
    },
    [setValue, name],
  );

  const radioOptions = useMemo(() => {
    return attributes?.map(({ title, attribute_id }) => ({
      label: title,
      value: String(attribute_id),
    }));
  }, [attributes]);

  return { value, onChange, radioOptions };
}
