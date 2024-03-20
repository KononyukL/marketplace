import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";

export const Category = () => {
  const { query, asPath } = useRouter();
  console.log(asPath);
  const { data } = useGetCategories();

  const categoryId = query?.id as string;

  const categoryItem = data?.find((category) => category.id === +categoryId);
  console.log(`item`, categoryItem);
  return (
    <div className="m-auto h-screen max-w-main p-14 text-black">
      {categoryItem?.title}
    </div>
  );
};
