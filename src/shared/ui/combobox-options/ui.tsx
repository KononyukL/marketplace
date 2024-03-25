import { Combobox } from "@headlessui/react";
import { type ReactNode } from "react";

interface IComboboxOptions<T> {
  children?: ReactNode;
  value: T;
  disabled?: boolean;
  onClick?: () => void;
}
export const ComboboxOptions = <T,>({
  value,
  children,
  disabled,
  onClick,
}: IComboboxOptions<T>) => {
  return (
    <Combobox.Option
      onClick={onClick}
      disabled={disabled}
      className={({ active }) =>
        `relative  cursor-pointer select-none  ${active && "bg-hover"}`
      }
      value={value}
    >
      {({ selected, active }) => (
        <>
          <div
            className={`truncate   ${selected ? "font-medium" : "font-normal"}`}
          >
            {children}
          </div>
          {selected ? (
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                active ? "text-white" : "text-teal-600"
              }`}
            ></span>
          ) : null}
        </>
      )}
    </Combobox.Option>
  );
};
