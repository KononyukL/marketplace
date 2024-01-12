import Link from "next/link";
import { ReactComponent as Arrow } from "../../../../public/images/arrow.svg";
import { type ICategoriesBase } from "@/shared/api/types";

interface IBreadcrumbs {
  crumbs: string[];
  categoryItem: ICategoriesBase;
}

export const Breadcrumbs = ({ crumbs, categoryItem }: IBreadcrumbs) => {
  return (
    <>
      <div className="mx-14 mb-6 mt-8 flex flex-row items-center gap-3 text-base font-semibold leading-relaxed text-black">
        {crumbs?.map((crumb: string, i: number) => {
          if (crumb !== "categories") {
            const href = `${crumbs.slice(0, i + 1).join("/")}`;
            console.log(`href`, href);
            const isLastCrumb = i === crumbs.length - 1;
            return (
              <span key={i} className="flex flex-row items-center gap-3">
                {isLastCrumb ? (
                  `Категорія ${categoryItem.title}`
                ) : (
                  <>
                    {" "}
                    <Link href={"/"}>{"Головна"}</Link>
                    <span className="h-5 w-5">
                      <Arrow />
                    </span>
                  </>
                )}
              </span>
            );
          }
        })}
      </div>
    </>
  );
};
{
}
