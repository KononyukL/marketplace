import {
  type IState,
  SearchLocation,
} from "@/entities/search-header/ui/search-location";
import { Form } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { ButtonSearch } from "@/shared/ui/buttons/ui/button-search";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SearchCategories } from "@/entities/search-header/ui/search-categories";

interface ISearch {
  categories: string;
  location: IState;
}

export const SearchHeader = () => {
  const form = useForm<ISearch>({
    mode: "all",
    defaultValues: { categories: "", location: {} },
  });
  const { getValues } = form;

  const { categories, location } = getValues();

  const { data, searchCategories } = useGetCategoriesSearch(DEFAULT_LOCALE, {
    size: 12,
    page: 1,
    searchTerm: "",
    cityIds: location.id || 0,
  });
  const router = useRouter();

  useEffect(() => {
    if (data?.category?.id && !router.pathname.includes("categories")) {
      const pathname = `/categories/${data?.category.id}`;
      void router.push(
        {
          pathname,
          query: { categories, location: JSON.stringify(location) },
        },
        pathname,
      );
    }
  }, [categories, data, location, router]);

  return (
    <Form form={form} onSubmit={() => searchCategories(categories)}>
      <div className="flex w-full max-w-search  gap-1">
        <div className={`rounded border border-solid border-border-2 `}>
          <div className={`flex items-center rounded bg-white`}>
            <SearchCategories categories={categories} />
            <SearchLocation />
          </div>
        </div>
        <ButtonSearch disabled={!categories} />
      </div>
    </Form>
  );
};
