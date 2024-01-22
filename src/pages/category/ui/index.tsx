import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { TestHeader } from "./test-header";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";

export const Category = () => {
  const { query, asPath } = useRouter();

  const selected = asPath.split("/");
  const { data } = useGetCategories();

  const categoryId = query?.id as string;

  const categoryItem = data?.find((category) => category.id === +categoryId);

  return (
    <>
      {categoryItem && (
        <Breadcrumbs crumbs={selected} categoryItem={categoryItem} />
      )}
      <TestHeader />
    </>
  );
};
