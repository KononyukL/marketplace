import { useTranslation } from "next-i18next";

interface IButtonResetFilters {
  onClick: () => void;
}
export const ButtonResetFilters = ({ onClick }: IButtonResetFilters) => {
  const { t } = useTranslation("categories");

  return (
    <button
      onClick={onClick}
      className="hover:bg-pink-2 border-pink-1 rounded-2xl border bg-white px-4 py-1.5 text-sm hover:text-white"
    >
      {t("reset-filters")}
    </button>
  );
};
