import { useGetLanguage } from "@/shared/queries/languages";
import { useRouter } from "next/router";
import { cn } from "@/shared/lib/cn";

export const Language = ({
  className,
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const router = useRouter();

  const handleLocaleChange = (locale: string) => () => {
    router.push(router.route, router.asPath, {
      locale,
      scroll: false,
    });
  };

  const { data } = useGetLanguage();

  return (
    <div>
      <div className="flex text-white">
        {data
          ?.map((el) => (
            <div
              onClick={handleLocaleChange(el.lang_code)}
              key={el.name}
              className={cn(
                " flex h-border cursor-pointer items-center  border-r border-r-white p-1 uppercase last:border-transparent hover:text-primary ",
                className,
                {
                  "text-primary": router.locale === el.lang_code,
                },
              )}
            >
              {el.lang_code}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};
