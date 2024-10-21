import { type IAttribute } from "@/shared/api/advertisement-favorite/types";
import { useMemo } from "react";

export const CharacteristicsTab = ({
  favoriteAttributes,
  attributes,
}: {
  favoriteAttributes: IAttribute[];
  attributes: IAttribute[];
}) => {
  const characteristicsData = useMemo(() => [...favoriteAttributes, ...attributes], [favoriteAttributes, attributes]);
  return (
 <div className="flex flex-col gap-3 flex-wrap max-h-characteristics">
  {characteristicsData.map((el) => (
    <div key={el.id} className="w-[50%] flex">
        <span className="text-text-3 w-[35%]">{el.group_title}</span>
        <span className="text-title w-[65%]">{el.title}</span>
      </div>
  ))}
</div>
  );
};
