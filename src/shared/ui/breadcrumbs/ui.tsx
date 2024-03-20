import Image from "next/image";
import Link from "next/link";

interface IBreadcrumbs {
  startingTitle: string;
  segments: string[];
  segmentTitle: string;
}

export const Breadcrumbs = ({
  segments,
  startingTitle,
  segmentTitle,
}: IBreadcrumbs) => {
  let href = "";
  return (
    <>
      <div className="flex flex-row items-center gap-3 border-t border-text-2 px-14 py-8 text-base font-semibold leading-relaxed text-black">
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
                  <Link
                    href={href}
                    className="text-text-3 transition-all hover:text-primary"
                  >
                    {segment === "" ? `${startingTitle}` : segmentTitle}
                  </Link>
                  <span className="mx-[1px]">
                    <Image
                      src="image/icon-arrow.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </span>
                </>
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};
