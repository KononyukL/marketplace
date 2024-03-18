import { type ChangeEvent, Fragment, type ReactNode } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ButtonDelete } from "@/shared/ui/buttons/ui/button-delete";

interface ISearch<T> {
  displayValue: (item: T) => string;
  value?: T;
  handleSave: (props: T) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  icon?: ReactNode;
  placeholder: string;
  onFocus?: () => void;
  disableClose?: boolean;
  querystring: string;
  stateId?: number;
  onClearLocation?: () => void;
}

export const Search = <T,>({
  displayValue,
  value,
  handleSave,
  onChange,
  children,
  icon,
  placeholder,
  onFocus,
  querystring,
  disableClose,
  stateId,
  onClearLocation,
}: ISearch<T>) => {
  return (
    <Combobox value={value} onChange={handleSave}>
      {({ open }) => (
        <div className="relative w-2/4  border-l border-l-border-2 text-text-3">
          <Combobox.Button
            as="div"
            className="relative flex w-full cursor-default overflow-hidden rounded bg-white pl-4 pr-2.5 text-left text-text-3 focus:rounded focus:border focus:border-solid focus:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
          >
            <div className="flex items-center">{icon}</div>
            <Combobox.Input
              className=" w-full border-none py-2 text-sm leading-5 outline-none focus:ring-0 "
              displayValue={displayValue}
              placeholder={placeholder}
              onChange={onChange}
              autoComplete="off"
              onFocus={onFocus}
            />
            {querystring || stateId ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-black">
                <ButtonDelete onClick={onClearLocation} />
              </div>
            ) : (
              ""
            )}
          </Combobox.Button>
          <Transition
            show={disableClose || open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => ""}
          >
            {children}
          </Transition>
        </div>
      )}
    </Combobox>
  );
};
