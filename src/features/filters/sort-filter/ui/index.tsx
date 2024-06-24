import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { cn } from "@/shared/lib/cn";

export interface ISortFilterOption<T> {
  title: string;
  value: T;
}

interface ISortFilter<T> {
  options: ISortFilterOption<T>[];
  onChange: (value: ISortFilterOption<T>) => void;
  selected: ISortFilterOption<T>;
  className?: string;
}

export const SortFilter = <T,>({
  options,
  onChange,
  selected,
  className,
}: ISortFilter<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-auto w-sort-filter">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative ">
          <Listbox.Button
            onClick={() => setOpen(!open)}
            className="border-gray-4  relative w-full cursor-default rounded border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="text-teal-0 block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className={cn("l h-4 w-4 transition-transform", className, {
                  transform: open,
                })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={open ? "M19 14l-7-7-7 7" : "M5 6l7 7 7-7"}
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute max-h-60 w-full overflow-auto  bg-white  text-base  ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((el, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none px-3 py-1 ${
                      active ? "text-teal-0 bg-teal-4" : "text-gray-900"
                    }`
                  }
                  value={el}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {el.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
