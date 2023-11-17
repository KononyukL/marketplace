import { useGetLanguage } from "@/shared/queries/languages";

export const Language = () => {
  const { data } = useGetLanguage();
  return (
    <div>
      <div className="flex   text-white">
        {data
          ?.map((el, i) => (
            <div
              key={i}
              className=" flex h-border cursor-pointer  items-center border-r border-r-white p-1 uppercase last:border-transparent hover:text-primary"
            >
              {el.lang_code}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};
