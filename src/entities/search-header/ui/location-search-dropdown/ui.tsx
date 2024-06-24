import { type ChangeEvent, Fragment, type ReactNode } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ButtonDelete } from "@/shared/ui/buttons/ui/button-delete";
import { Icons } from "@/shared/config";

interface ISearch<T> {
  displayValue: (item: T) => string;
  value: T | null;
  setSelectedLocation: (props: T) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  placeholder: string;
  onFocus?: () => void;
  forceDropdownOpen?: boolean;
  querystring: string;
  stateId?: number;
  onClearLocation?: () => void;
}

// todo: probably we can make this component more generalizable
export const LocationSearchDropdown = <T,>({
  displayValue,
  value,
  setSelectedLocation,
  onChange,
  children,
  icon = <Icons.Location />,
  placeholder,
  onFocus,
  querystring,
  forceDropdownOpen,
  stateId,
  onClearLocation,
}: React.PropsWithChildren<ISearch<T>>) => {
  const showButton = querystring || stateId;

  return (
    <Combobox value={value} onChange={setSelectedLocation}>
      {({ open }) => (
        <div className="border-l-gray-4 text-gray-8  relative w-2/4 border-l">
          <Combobox.Button
            as="div"
            className="text-gray-8 relative flex w-full cursor-default overflow-hidden rounded bg-white pl-4 pr-2.5 text-left focus:rounded focus:border focus:border-solid focus:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
          >
            <div className="text-gray-5 flex items-center pr-1">{icon}</div>
            <Combobox.Input
              className=" w-full border-none py-2 text-sm leading-5 outline-none focus:ring-0 "
              displayValue={displayValue}
              placeholder={placeholder}
              onChange={onChange}
              autoComplete="off"
              onFocus={onFocus}
            />
            {!!showButton && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-black">
                <ButtonDelete onClick={onClearLocation} />
              </div>
            )}
          </Combobox.Button>
          <Transition
            show={forceDropdownOpen || open}
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
