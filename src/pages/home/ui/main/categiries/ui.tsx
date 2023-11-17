import { useGetCategories } from "@/shared/queries/categories";
import Link from "next/link";

export const Categories = () => {
  const { data } = useGetCategories();
  return (
    <div>
      <div className="m-auto flex max-w-categories items-center justify-between gap-2  pb-6 pt-6 text-xl font-semibold text-title">
        {data?.map((el) => (
          <Link href="#" key={el.id} className="underline hover:text-primary">
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
