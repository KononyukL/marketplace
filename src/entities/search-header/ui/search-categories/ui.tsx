import { ControlledInput } from "@/shared/ui";
import { ButtonDelete } from "@/shared/ui/buttons/ui/button-delete";
import { useTranslation } from "next-i18next";

interface ISearchCategories {
  onClear: () => void;
  hideClear?: boolean;
}

export const SearchCategories = ({ onClear, hideClear }: ISearchCategories) => {
  const { t } = useTranslation("common");

  const endAdornmentComponent = () => {
    if (hideClear) {
      return;
    }

    return <ButtonDelete onClick={onClear} />;
  };

  return (
    <div className="w-2/4">
      <ControlledInput
        name="searchTerm"
        className={`focus:border-none [&>input]:border-none [&>input]:p-0 [&>input]:px-4 [&input]:border-transparent `}
        placeholder={t("search.looking-for")}
        endAdornment={endAdornmentComponent()}
      />
    </div>
  );
};
