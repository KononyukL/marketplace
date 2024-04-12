export interface ICheckboxFilterProps {
  disabled?: false;
  defaultChecked?: false;
  id: string;
  label: string;
}

export const CheckboxFilter = (props: ICheckboxFilterProps) => {
  const { disabled = false, defaultChecked = false, id, label } = props;

  return (
    <div className="flex w-full items-center gap-2">
      <input
        className="
        disabled:border-steel-400
        disabled:bg-steel-400 peer peer relative mt-1 h-6 w-6 shrink-0 appearance-none rounded-sm border-2
        border-border-2 bg-white checked:border-0 checked:bg-additional
        focus:outline-none
      "
        type="checkbox"
        disabled={disabled}
        defaultChecked={defaultChecked}
        {...props}
      />
      <svg
        className="pointer-events-none absolute  ml-1 mt-1  hidden h-4 w-4 stroke-white outline-none peer-checked:block"
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
        className="peer-checked:font-medium peer-checked:text-black"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
