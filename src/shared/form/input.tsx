import clsx from "clsx";
import React, {
  type HTMLInputTypeAttribute,
  type ChangeEvent,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";
import { type Noop, useFormContext, useController } from "react-hook-form";
export type InputProps = {
  name: string;
  title?: string;
  value?: string;
  optional?: boolean;
  error?: boolean | string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  inputStyles?: string;
  fullWidth?: boolean;
  valueAsNumber?: boolean;
  min?: number;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  onValue?: (value: string | number) => void;
  onBlur?: Noop;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
>;
export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  (props, ref) => {
    const {
      name,
      placeholder,
      disabled,
      error,
      className,
      inputStyles,
      startAdornment,
      endAdornment,
      value = "",
      type,
      min,
      valueAsNumber,
      inputRef,
      onValue,
      onBlur,
      onKeyDown,
      ...rest
    } = props;
    const handleChange = React.useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!valueAsNumber) {
          return typeof onValue === "function" && onValue(value);
        }
        if (value.length > 1 && value[0] === "0") {
          value = value.slice(1);
        }
        let parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) parsedValue = 0;
        if (min !== undefined && !isNaN(min) && parsedValue < min) {
          parsedValue = min;
        }
        typeof onValue === "function" && onValue(parsedValue);
      },
      [onValue, valueAsNumber, min],
    );
    const valueStr = value?.toString() ?? "";
    return (
      <>
        <div
          ref={ref}
          className={clsx(
            "relative w-full cursor-default overflow-hidden rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300",
            className,
          )}
        >
          {startAdornment && (
            <div className="text-primary absolute inset-y-0 left-0 flex items-center pl-3">
              {startAdornment}
            </div>
          )}
          <input
            autoComplete="off"
            ref={inputRef}
            type={type}
            value={valueStr}
            disabled={disabled}
            className={clsx(
              "border-primary-2 text-primary placeholder:text-primary w-full rounded-lg border-2 px-2.5 py-2 font-light placeholder:font-light focus:outline-none focus:ring-0 focus-visible:outline-none",
              inputStyles,
            )}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            {...rest}
          />
          {endAdornment && (
            <div className="text-primary absolute inset-y-0 right-0 flex items-center pr-3">
              {endAdornment}
            </div>
          )}
        </div>
        {error && <p>{error}</p>}
      </>
    );
  },
);
Input.displayName = "Input";
type ControlledInputProps = InputProps & {
  name: string;
  valueAsNumber?: boolean;
};
export const ControlledInput = (props: ControlledInputProps) => {
  const { name, ...rest } = props;
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  const {
    onChange: controlOnChange,
    onBlur: controlOnBlur,
    ...restField
  } = field;
  const handleOnChange = (value: string | number) => {
    controlOnChange(value);
  };
  return (
    <Input
      onValue={handleOnChange}
      onBlur={controlOnBlur}
      {...restField}
      {...rest}
    />
  );
};
