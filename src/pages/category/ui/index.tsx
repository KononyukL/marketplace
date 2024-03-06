import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { useGetCategoriesSearch } from "@/shared/queries/search";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import { jsonParser } from "@/shared/config";
import type { IState } from "@/entities/search-header/ui/search-location";

export const Category = () => {
  const { query } = useRouter();

  const { data } = useGetCategories();

  const categoryId = query?.id as string;
  const search = (query?.categories as string) || "";
  const location = jsonParser<IState>(query?.location as string) || { id: 0 };

  const categoryItem = data?.find((category) => category.id === +categoryId);

  const { data: categories } = useGetCategoriesSearch(DEFAULT_LOCALE, {
    size: 12,
    page: 1,
    searchTerm: search,
    cityIds: location.id || 0,
  });

  console.log(categories);

  return (
    <div className="m-auto h-screen max-w-main p-14 text-black">
      {categoryItem?.title}
    </div>
  );
};
