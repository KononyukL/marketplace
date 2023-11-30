import { useGetCategories } from "@/shared/queries/categories";
import Link from "next/link";
import { useRouter } from "next/router";

export const Categories = () => {
  const { locale } = useRouter();

  const { data } = useGetCategories(locale);

  return (
    <div>
      <div className="m-auto mb-20 flex max-w-categories  items-center justify-between gap-2 py-3   text-xl font-semibold text-title">
        {data?.map((category) => (
          <Link
            href={`categories/${category.id}`}
            key={category.id}
            className="underline hover:text-primary"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
