import { type IAttribute } from "@/shared/api/advertisement-favorite/types";

export const CharacteristicsTab = ({
  favoriteAttributes,
  attributes,
}: {
  favoriteAttributes: IAttribute[];
  attributes: IAttribute[];
}) => {
  return (
 <div className="flex flex-col gap-3 flex-wrap max-h-[150px]">
  {[...attributes, ...favoriteAttributes].map((el, index) => (
    <div key={index} className="w-1/3 flex">
        <span className="text-text-3 w-[50%]">{el.group_title}</span>
        <span className="text-title">{el.title}</span>
      </div>
  ))}
</div>
  );
};
