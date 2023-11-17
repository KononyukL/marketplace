import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useGetCategories } from "@/shared/queries/categories";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
export const Search = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");
  const { data } = useGetCategories();

  return (
    <div className="relative  max-w-[560px]">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1 ">
          <div className="relative flex w-full cursor-default overflow-hidden rounded-[30px] border border-solid border-gray-500 bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className=" w-full border-none py-2 pl-5 pr-10 text-sm leading-5 text-gray-900 outline-none  focus:ring-0 "
              displayValue={() => ""}
              placeholder="Я шукаю... "
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Input
              className="w-full border-none py-2  pl-5  pr-10 text-sm leading-5 text-gray-900 outline-none focus:ring-0"
              displayValue={() => ""}
              placeholder="Місцезнаходження"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {data?.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                data?.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.title}
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
        <button className="absolute inset-y-0 right-0 flex items-center pr-5 ">
          <Image
            src={"/images/icon-search.svg"}
            alt="Search"
            width={24}
            height={24}
          />
        </button>
      </Combobox>
    </div>
  );
};
