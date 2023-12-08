import { useGetCategoriesFavoriteTags } from "@/shared/queries/categories-favorite-tags";
import { useState } from "react";
import { Advertisement } from "@/shared/ui/advertisement";
import { ButtonTags } from "@/shared/ui/buttons/ui/button-tags";
import { type ICategoriesFavoriteTags } from "@/shared/api/categories-favorite-tags/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Button } from "@/shared/ui";
import { Icons } from "@/shared/config";

export const TopAnnouncement = () => {
  const { locale } = useRouter();
  const { data } = useGetCategoriesFavoriteTags(locale);

  const [categoryId, setCategoryId] = useState(0);
  const { t } = useTranslation("home");
  const onClick = (categoryId: number) => () => {
    setCategoryId(categoryId);
  };

  const all: ICategoriesFavoriteTags = {
    category_id: 0,
    lang_code: data?.[0].lang_code || "",
    tag_title: t("all-advantages"),
  };

  const allTags = [all, ...(data || [])];

  return (
    <div className="m-auto max-w-main p-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">{t("top")}</h2>
      <div className="flex flex-col gap-8">
        <div className="flex gap-2">
          {allTags?.map((tag) => (
            <ButtonTags
              onClick={onClick(tag.category_id)}
              key={tag.category_id}
              isActive={categoryId === tag.category_id}
            >
              {tag.tag_title.toLowerCase()}
            </ButtonTags>
          ))}
        </div>
        <Advertisement />
      </div>
      <div className="mt-10 flex justify-center">
        <Button size="xl" variant="outline" endAdornment={<Icons.Plus />}>
          {t("see-more")}
        </Button>
      </div>
    </div>
  );
};
