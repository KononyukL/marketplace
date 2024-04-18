import Image from "next/image";
import Link from "next/link";

interface IBreadcrumbs {
  startingTitle: string;
  segments: string[];
  segmentTitle?: string;
}

export const Breadcrumbs = ({
  segments,
  startingTitle,
  segmentTitle = "",
}: IBreadcrumbs) => {
  let href = "";
  return (
    <>
      <div className="m-auto flex max-w-main flex-row  items-center gap-3 px-14 py-8 text-base font-semibold leading-relaxed text-black">
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
                    {segment === "" ? `${startingTitle}` : segment}
                  </Link>
                  <span className="mx-px">
                    <Image
                      src="/images/icon-arrow.svg"
                      alt="arrow"
                      width={10}
                      height={10}
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
