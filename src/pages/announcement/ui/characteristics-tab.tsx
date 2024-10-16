import { type IAttribute } from "@/shared/api/advertisement-favorite/types";

export const CharacteristicsTab = ({
  favoriteAttributes,
  attributes,
}: {
  favoriteAttributes: IAttribute[];
  attributes: IAttribute[];
}) => {
  return (
 <div className="flex flex-col gap-3 flex-wrap max-h-characteristics">
  {[...favoriteAttributes, ...attributes].map((el, index) => (
    <div key={index} className="w-[50%] flex">
        <span className="text-text-3 w-[35%]">{el.group_title}</span>
        <span className="text-title w-[65%]">{el.title}</span>
      </div>
  ))}
</div>
  );
};
