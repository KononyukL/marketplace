import { ControlledInput } from "@/shared/ui";
import { ButtonDelete } from "@/shared/ui/buttons/ui/button-delete";
import { useTranslation } from "next-i18next";

interface ISearchCategories {
  onClear: () => void;
  hideClear?: boolean;
}

export const SearchCategories = ({ onClear, hideClear }: ISearchCategories) => {
  const { t } = useTranslation("common");

  return (
    <div className="w-2/4">
      <ControlledInput
        name="searchTerm"
        className={` [&>input]:border-none [&>input]:p-0 [&>input]:px-4 `}
        placeholder={t("search.looking-for")}
        endAdornment={!hideClear && <ButtonDelete onClick={onClear} />}
      />
    </div>
  );
};
