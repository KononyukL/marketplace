import { useRouter } from "next/router";

import { useGetCategories } from "@/shared/queries/categories";
import { TestPage } from "./testPage";

export const Category = () => {
  const { query } = useRouter();
  const { data } = useGetCategories();

  const categoryId = query?.id as string;

  const categoryItem = data?.find((category) => category.id === +categoryId);

  return (
    <>
      <div className="m-auto max-w-main px-14 pb-6 pt-8 text-black">
        {categoryItem?.title}
      </div>
      <TestPage />
    </>
  );
};
