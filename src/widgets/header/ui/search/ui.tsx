import { type ChangeEvent, Fragment, useMemo } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useGetCitiesByName } from "@/shared/queries/locations";
import useSaveInURL from "@/shared/hooks/use-save-in-url";
import { type ICity } from "@/shared/api/locations/types";

export const Search = () => {
  const { savedData: savedLocation, onSave } = useSaveInURL<{
    id: number;
    name: string;
  }>("location");
  const { data, searchCitiesByName, queryString } = useGetCitiesByName(
    savedLocation?.name,
  );

  const handleSave = ({ id, name }: ICity) => {
    onSave({ id, name });
  };

  const savedValue = useMemo(
    () => data?.find((location) => location.id === savedLocation?.id),
    [savedLocation, data],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchCitiesByName(event.target.value);
    if (savedLocation) {
      onSave();
    }
  };

  return (
    <div className="relative  max-w-[560px]">
      <Combobox value={savedValue} onChange={handleSave}>
        <div className="relative mt-1 ">
          <div className="relative flex w-full cursor-default overflow-hidden rounded-[30px] border border-solid border-gray-500 bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className=" w-full border-none py-2 pl-5 pr-10 text-sm leading-5 text-gray-900 outline-none  focus:ring-0 "
              displayValue={(item: ICity) => item.name || queryString}
              placeholder="Я шукаю... "
              onChange={onChange}
              autoComplete="off"
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => ""}
          >
            <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {data?.length === 0 && queryString !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                data?.map((city) => (
                  <Combobox.Option
                    key={city.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white" : "text-gray-900"
                      }`
                    }
                    value={city}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {city.name}
                        </span>
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
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
        {/*<button className="absolute inset-y-0 right-0 flex items-center pr-5 ">*/}
        {/*  <Image*/}
        {/*    src={"/images/icon-search.svg"}*/}
        {/*    alt="Search"*/}
        {/*    width={24}*/}
        {/*    height={24}*/}
        {/*  />*/}
        {/*</button>*/}
      </Combobox>
    </div>
  );
};
