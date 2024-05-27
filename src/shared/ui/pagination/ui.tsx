import { usePaginationHook } from "@/shared/ui/pagination/lib";
import { Icons, PAGE_SIZE_CATEGORIES } from "@/shared/config";
import { cn } from "@/shared/lib/cn";

const PAGINATION_RANGE_LENGTH = 2;
interface IPagination {
  onPageChange: (page: number) => void;
  totalCount?: number;
  siblingCount?: number;
  currentPage: number;
  pageSize?: number;
  className?: string;
}

export const Pagination = ({
  onPageChange,
  totalCount = 0,
  siblingCount = 1,
  currentPage,
  pageSize = PAGE_SIZE_CATEGORIES,
  className,
}: IPagination) => {
  const { paginationRange } = usePaginationHook({
    totalCount,
    siblingCount,
    pageSize,
    currentPage,
  });

  const paginationRangeLength =
    paginationRange && paginationRange?.length < PAGINATION_RANGE_LENGTH;

  if (currentPage === 0 || paginationRangeLength) {
    return null;
  }

  const lastPage = Number(paginationRange[paginationRange.length - 1]);

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const disabledPrevious = currentPage <= 1;
  const disabledNext = currentPage >= lastPage;

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const onClickNumberPage = (num: number) => () => onPageChange(num);

  return (
    <>
      <nav className="mt-10 flex justify-center">
        <div className="flex h-10 items-center gap-2 text-base">
          <button
            onClick={onPrevious}
            className={cn(
              "mr-2 flex h-10  items-center justify-center rounded-lg bg-white px-4 leading-tight text-gray-500  shadow-box hover:bg-additional  hover:text-white  dark:border-gray-700 ",
              className,
              { "text-disable hover:bg-white ": disabledPrevious },
            )}
          >
            <Icons.ArrowRight
              className={cn("h-4 w-4 rotate-180 hover:text-white", className, {
                "text-disable hover:text-disable": disabledPrevious,
              })}
            />
          </button>

          {paginationRange?.map((el) => (
            <button
              key={el}
              onClick={onClickNumberPage(+el)}
              className={cn(
                "flex h-10 items-center justify-center rounded-lg bg-white  px-4 leading-tight text-gray-500 shadow-box hover:bg-additional hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                className,
                { "bg-additional text-white": currentPage === el },
              )}
            >
              {el}
            </button>
          ))}

          <button
            onClick={onNext}
            className={cn(
              "ml-2 flex h-10  items-center justify-center rounded-lg bg-white px-4 leading-tight text-gray-500  shadow-box hover:bg-additional  hover:text-white  dark:border-gray-700 ",
              className,
              { "text-disable hover:bg-white ": disabledNext },
            )}
          >
            <Icons.ArrowRight
              className={cn("h-4 w-4  hover:text-white", className, {
                "text-disable hover:text-disable": disabledNext,
              })}
            />
          </button>
        </div>
      </nav>
    </>
  );
};
