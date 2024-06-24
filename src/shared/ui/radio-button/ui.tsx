import { type ChangeEvent } from "react";

interface IOptions {
  label: string;
  value: string;
}

interface IRadioButton {
  options?: IOptions[];
  onChange?: (value: string) => void;
  value: string;
}
export const RadioButton = ({ options, onChange, value }: IRadioButton) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <>
      {options?.map((option) => (
        <div className="flex items-center" key={option.value}>
          <div className="relative flex cursor-pointer items-center rounded-full py-3">
            <input
              name="type"
              type="radio"
              className="before:content[''] hover:before:opacity-1 text-teal-0 checked:border-teal-0  checked:before:bg-teal-0 hover:border-teal-0 border-gray-4 peer relative h-5 w-5 cursor-pointer appearance-none  rounded-full border-2 transition-all duration-300 before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity"
              id={`${option.value}`}
              onChange={handleChange}
              value={option.value}
              checked={value === option.value}
            />
            <span className="text-teal-0 pointer-events-none absolute left-[10px] top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </span>
            <label
              className="ml-2 mt-px cursor-pointer select-none font-light text-gray-700 hover:font-medium peer-checked:font-medium"
              htmlFor={`${option.value}`}
            >
              {option.label}
            </label>
          </div>
        </div>
      ))}
    </>
  );
};
