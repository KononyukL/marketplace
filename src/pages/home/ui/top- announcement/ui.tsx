import { useGetCategoriesFavoriteTags } from "@/shared/queries/categories-favorite-tags";
import { useState } from "react";
import { Advertisement } from "@/shared/ui/advertisement";
import { ButtonTags } from "@/shared/ui/buttons/ui/button-tags";
import { type ICategoriesFavoriteTags } from "@/shared/api/categories-favorite-tags/types";

export const TopAnnouncement = () => {
  const { data } = useGetCategoriesFavoriteTags();
  const [categoryId, setCategoryId] = useState(0);

  const onClick = (categoryId: number) => () => {
    setCategoryId(categoryId);
  };

  const all: ICategoriesFavoriteTags = {
    category_id: 0,
    lang_code: data?.[0].lang_code || "",
    tag_title: "всі",
  };

  const allTags = [all, ...(data || [])];

  return (
    <div className="m-auto max-w-main p-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">Топ оголошення</h2>
      <div className="flex flex-col gap-[32px]">
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
    </div>
  );
};
