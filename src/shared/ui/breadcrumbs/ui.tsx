import Link from "next/link";

interface IBreadcrumbs {
  startingTitle: string;
  segments: string[];
  segmentTitle: string;
  // categoryItem: ICategoriesBase;
}
// interface IData {
//   tips: string;
// }

export const Breadcrumbs = ({
  segments,
  startingTitle,
  segmentTitle,
}: IBreadcrumbs) => {
  let href = "";
  return (
    <>
      <div className="mx-14 flex flex-row items-center gap-3 border-t border-text-2 py-8 text-base font-semibold leading-relaxed text-black">
        {segments?.map((segment: string, i: number) => {
          href += `/${segment}`;
          const isLastSegment = i === segments.length - 1;

          return (
            <span key={i} className="flex flex-row items-center gap-3">
              {isLastSegment ? (
                segmentTitle
              ) : (
                <>
                  {" "}
                  <Link href={href}>
                    {segment === "" ? `${startingTitle}` : segmentTitle}
                  </Link>
                  <span>{" > "}</span>
                </>
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};
