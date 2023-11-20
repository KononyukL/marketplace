import { useRouter } from "next/router";
import { useGetCategories } from "@/shared/queries/categories";

export const Category = () => {
  const { query } = useRouter();

  const { data } = useGetCategories();

  const categoryId = query?.id as string;

  const categoryItem = data?.find((category) => category.id === +categoryId);

  return (
    <div className="m-auto h-screen max-w-main p-14 text-black">
      {categoryItem?.title}
    </div>
  );
};
