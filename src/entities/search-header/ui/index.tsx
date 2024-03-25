import { SearchLocation } from "@/entities/search-header/ui/search-location";
import { Form } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { ButtonSearch } from "@/shared/ui/buttons/ui/button-search";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { useRouter } from "next/router";
import { SearchCategories } from "@/entities/search-header/ui/search-categories";
import {
  GLOBAL_SEARCH_KEY,
  type ICategoriesSearch,
  useCategoriesFilters,
} from "@/shared/queries/search/use-categories-filters";
import React, { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/shared/lib/validation/validation";

export const SearchHeader = () => {
  const { filters, onCategoriesSearchChange } = useCategoriesFilters();

  const form = useForm<ICategoriesSearch>({
    mode: "all",
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: filters.searchTerm,
      location: filters.location,
    },
  });
  const { setValue, watch } = form;

  const categories = watch("searchTerm");
  const location = watch("location");

  const { refetch } = useGetCategoriesSearch({
    filters,
    config: { enabled: false },
  });

  const router = useRouter();

  useEffect(() => {
    void (async function () {
      if (!router.pathname.includes("categories") && filters.searchTerm) {
        const { data } = await refetch();

        if (data) {
          const pathname = `/categories/${
            data?.category?.id || 0
          }?${GLOBAL_SEARCH_KEY}=${
            router.query?.[GLOBAL_SEARCH_KEY] as string
          }`;
          void router.push(pathname);
        }
      }
    })();

    setValue("searchTerm", filters.searchTerm);
    setValue("location", filters.location);
    // eslint-disable-next-line
  }, [filters.searchTerm, filters.location]);

  const onSubmit = (values: ICategoriesSearch) => {
    onCategoriesSearchChange(values);
  };

  const onClear = useCallback(() => {
    setValue("searchTerm", "");
  }, [setValue]);

  const onClearLocation = useCallback(() => {
    setValue("location", { name: "", id: 0 });
  }, [setValue]);

  return (
    <div className="flex  justify-center">
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex  gap-1 ">
          <div className="flex w-search items-center rounded border border-solid border-border-2 bg-white">
            <SearchCategories onClear={onClear} hideClear={!categories} />
            <SearchLocation
              defaultLocation={location}
              onClear={onClearLocation}
            />
          </div>
          <ButtonSearch disabled={!categories && !filters.searchTerm} />
        </div>
      </Form>
    </div>
  );
};
