interface ISkeletonAds {
  number: number;
}

export const SkeletonAds = ({ number }: ISkeletonAds) => {
  return Array(number)
    .fill(0)
    .map((el, i) => (
      <div
        key={i}
        role="status"
        className="animate-pulse space-y-8  rounded-lg bg-white p-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0"
      >
        <div className="w-advertisement-photo flex h-image-advertisement max-h-photo-2 w-full  items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96">
          <svg
            className="h-10 w-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex w-full flex-1 flex-col justify-between">
          <div className="mb-10 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mt-[80px] flex items-center gap-3 ">
            <div className="mt-2.5 h-[36px] w-full max-w-[36px] gap-5 rounded-[59px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-[10px] flex w-full ">
              <div className="flex w-[160px] flex-col gap-2">
                <div className=" h-2 max-w-[112px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className=" h-2 max-w-[112px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex w-full flex-col  gap-2">
                <div className=" h-2  max-w-[170px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className=" h-2 max-w-[112px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
};
