import {
  type DetailedHTMLProps,
  forwardRef,
  type InputHTMLAttributes,
} from "react";

export interface ICheckboxFilterProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
}

export const ControlledCheckbox = forwardRef<
  HTMLInputElement,
  ICheckboxFilterProps
>(function CheckboxFilter(props, ref) {
  const { label, type = "checkbox", id, ...restProps } = props;

  return (
    <div className="flex w-full items-center gap-2">
      <input
        className="
        disabled:border-steel-400
        disabled:bg-steel-400
        peer  peer relative  h-features w-features shrink-0 cursor-pointer appearance-none
        rounded-sm border-2 border-border-2 bg-white transition-all duration-300 checked:border-0  checked:bg-additional hover:border-additional
        focus:outline-none
      "
        type={type}
        id={id}
        ref={ref}
        {...restProps}
      />
      <svg
        className="pointer-events-none absolute  mb-1 ml-1 mt-1  hidden h-3 w-3 stroke-white outline-none peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label
        htmlFor={id}
        className="ml-[8px] cursor-pointer  hover:font-medium peer-checked:font-medium peer-checked:text-black"
      >
        {label}
      </label>
    </div>
  );
});
