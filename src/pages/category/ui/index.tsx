import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";
import { TestPage } from "./testPage";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";

export const Category = () => {
  const { query, asPath } = useRouter();
  console.log(asPath);
  const selected = asPath.split("/");
  const { data, status } = useGetCategories();
  // const segmentName: [] = [];
  // data?.forEach((el) => {
  //   segmentName.push({ id: el.id, content: el.title });
  // });
  // console.log(segmentName);
  const categoryId = query?.id as string;

  const categoryItem = data?.find((category) => category.id === +categoryId);

  if (status === "success") {
    return (
      <>
        {categoryItem && (
          <Breadcrumbs crumbs={selected} categoryItem={categoryItem} />
        )}
        <TestPage />
      </>
    );
  }
};
