import { useRouter } from "next/router";
import Link from "next/link";
import { useGetCategoriesAll } from "@/shared/queries/categories-all";
import { ButtonBurgerMenu } from "@/shared/ui/buttons/ui/button-burger-menu";
import { useTranslation } from "next-i18next";
import { useOpenBurgerMenuHook } from "@/widgets/header/ui/burger-menu/lib/use-open-burger-menu-hook";
import { useClickOutside } from "@/widgets/header/ui/burger-menu/lib";

export const BurgerMenu = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("home");

  const { data } = useGetCategoriesAll(locale);

  const { isOpen, handleClick, handleClose } = useOpenBurgerMenuHook();

  const { ref } = useClickOutside<HTMLDivElement>({
    onClickOutside: handleClose,
  });

  return (
    <div ref={ref}>
      <ButtonBurgerMenu handleClick={handleClick} isOpen={isOpen} />
      {isOpen && (
        <div className="hs-overlay  hs-overlay-open:translate-x-0 fixed bottom-0 start-0 top-0 z-[60] hidden w-96 -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10   pt-[100px] transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2">
          <div className=" mb-8 flex items-center justify-between px-10">
            <p className="text-3xl font-medium">{t("all-categories")}</p>
            <div className=" flex items-center justify-center py-1 pl-2 shadow-button-scroll">
              <ButtonBurgerMenu handleClick={handleClick} isOpen={isOpen} />
            </div>
          </div>
          <nav className=" flex w-full flex-col flex-wrap gap-4">
            {data?.map((el) => (
              <Link
                onClick={handleClick}
                className="px-10 py-3 text-xl hover:bg-tags hover:text-additional"
                key={el.id}
                href={`/categories/${el.id}`}
              >
                {el.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
