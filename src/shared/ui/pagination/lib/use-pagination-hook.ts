import { generatePaginationRange } from "@/shared/ui/pagination/lib/generatePaginationRange";
import { useMemo } from "react";

interface IPagination {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}
const ITEM_COUNT = 5;
const PAGE_COUNT = 2;

export const DOTS = "...";
export function usePaginationHook({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: IPagination) {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + ITEM_COUNT;

    if (totalPageNumbers >= totalPageCount) {
      return generatePaginationRange(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );
    const shouldShowLeftDots = leftSiblingIndex > PAGE_COUNT;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - PAGE_COUNT;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = ITEM_COUNT * siblingCount;
      const leftRange = generatePaginationRange(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = generatePaginationRange(
        leftSiblingIndex,
        rightSiblingIndex,
      );
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [siblingCount, currentPage, totalCount, pageSize]);

  return { paginationRange };
}
