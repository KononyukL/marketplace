import { ControlledInput } from "@/shared/ui";
import { ButtonDelete } from "@/shared/ui/buttons/ui/button-delete";
import { useTranslation } from "next-i18next";

interface ISearchCategories {
  categories: string;
}

export const SearchCategories = ({ categories }: ISearchCategories) => {
  const { t } = useTranslation("common");
  return (
    <div className={`w-2/4 `}>
      <ControlledInput
        name="categories"
        className={`border-none [&>input]:border-transparent [&>input]:p-0 [&>input]:px-4`}
        placeholder={t("search.looking-for")}
        defaultValue={categories}
        endAdornment={<ButtonDelete />}
      />
    </div>
  );
};
