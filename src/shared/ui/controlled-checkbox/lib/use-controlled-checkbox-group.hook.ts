import {
  type ControllerRenderProps,
  type FieldValues,
  useController,
  useFormContext,
  useWatch,
} from "react-hook-form";

interface IUseControlledCheckboxGroup {
  name: string;
}

type IUseControlledCheckboxGroupResult<T> = Omit<
  ControllerRenderProps<FieldValues, string>,
  "value" | "onChange"
> & {
  value: T[];
  onChange: (value: T) => () => void;
};

export const useControlledCheckboxGroupHook = <T>({
  name,
}: IUseControlledCheckboxGroup): IUseControlledCheckboxGroupResult<T> => {
  const { control } = useFormContext();
  const {
    field: { onChange, ...restInput },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const checkboxIds = useWatch({ control, name }) || [];

  const handleChange = (value: T) => () => {
    const newArray: T[] = [...checkboxIds];

    if (newArray.length > 0) {
      const index = newArray.findIndex((el) => el === value);

      if (index === -1) {
        newArray.push(value);
      } else {
        newArray.splice(index, 1);
      }
    } else {
      newArray.push(value);
    }

    onChange(newArray);
  };

  return {
    ...restInput,
    onChange: handleChange,
  };
};
